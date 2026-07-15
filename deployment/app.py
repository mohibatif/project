import os
import logging
from typing import Dict, Any, List
import joblib
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

# Configure logger for production monitoring
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger("mlops-serving-api")

# Initialize FastAPI application
app = FastAPI(
    title="MLOps Model Deployment API",
    description="FastAPI service for production model prediction serving.",
    version="1.0.0"
)

# Resolve path to the trained model artifact
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "best_model.pkl")

# Load model globally on startup to avoid load overhead on individual requests
model = None

@app.on_event("startup")
def load_model():
    """Loads the pre-trained model file from disk during service initialization."""
    global model
    if os.path.exists(MODEL_PATH):
        try:
            model = joblib.load(MODEL_PATH)
            logger.info(f"Successfully loaded model from {MODEL_PATH}")
        except Exception as e:
            logger.error(f"Failed to load model from {MODEL_PATH}: {str(e)}")
    else:
        logger.warning(
            f"Model file not found at {MODEL_PATH}. "
            "Please ensure best_model.pkl is placed in the models/ directory. "
            "Predict endpoint will fall back to mock predictions."
        )

# Define prediction input schema (flexible list of input features or raw dictionary)
class ModelInput(BaseModel):
    # TODO: Define and document exact features once names and schema are finalized
    raw_data: Dict[str, Any]

# Define prediction output schema
class ModelOutput(BaseModel):
    predictions: List[Any]
    status: str

@app.get("/", status_code=status.HTTP_200_OK)
def read_root() -> Dict[str, str]:
    """Root endpoint providing basic API details."""
    return {
        "app_name": "MLOps Model Serving Gateway",
        "version": "1.0.0",
        "docs_url": "/docs"
    }

@app.get("/health", status_code=status.HTTP_200_OK)
def health_check() -> Dict[str, Any]:
    """Health check endpoint for liveness/readiness probes (Docker/Kubernetes)."""
    return {
        "status": "healthy",
        "model_loaded": model is not None,
        "model_path": MODEL_PATH
    }

@app.post("/predict", response_model=ModelOutput, status_code=status.HTTP_200_OK)
def predict(payload: ModelInput):
    """Processes incoming data, performs preprocessing, and runs model inference."""
    global model
    
    try:
        # Extract raw inputs
        raw_features = payload.raw_data
        logger.info(f"Received prediction request with features: {list(raw_features.keys())}")
        
        # ---------------------------------------------------------------------
        # TODO: Add feature preprocessing pipeline (scaling, encoding, etc.)
        # once the final training features and input pipeline schema are finalized.
        # Example placeholder processing:
        # processed_features = preprocess_inputs(raw_features)
        # ---------------------------------------------------------------------
        
        # If the model is loaded, execute actual inference
        if model is not None:
            # TODO: Convert processed_features into format expected by model (e.g. DataFrame/Matrix)
            # data_matrix = pd.DataFrame([processed_features])
            
            # Simple conversion assuming inputs are numerical list for mock purposes
            features_list = list(raw_features.values())
            prediction_result = model.predict([features_list])
            
            return {
                "predictions": prediction_result.tolist(),
                "status": "success"
            }
        else:
            # Fallback mock mode if model binary is missing during container build/validation
            logger.warning("Serving mock response (best_model.pkl is missing from models/)")
            # Return mean value of payload values as a mock prediction
            values = [float(v) for v in raw_features.values() if isinstance(v, (int, float))]
            mock_pred = [sum(values) / len(values) if values else 0.0]
            
            return {
                "predictions": mock_pred,
                "status": "mocked (place best_model.pkl in models/)"
            }

    except Exception as e:
        logger.error(f"Error handling prediction request: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Inference error: {str(e)}"
        )
