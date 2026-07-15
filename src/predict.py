import os
import logging
from typing import Dict, Any, List
import pandas as pd
import joblib
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("model-serving")

app = FastAPI(
    title="MLOps Model Serving API",
    description="FastAPI service for serving predictions from the best trained model.",
    version="1.0.0"
)

# Define path to the model
MODEL_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "models")
MODEL_PATH = os.path.join(MODEL_DIR, "best_model.pkl")

# Global model variable
model = None

@app.on_event("startup")
def load_model():
    """Load the model on application startup."""
    global model
    if os.path.exists(MODEL_PATH):
        try:
            model = joblib.load(MODEL_PATH)
            logger.info(f"Model successfully loaded from {MODEL_PATH}")
        except Exception as e:
            logger.error(f"Error loading model from {MODEL_PATH}: {str(e)}")
    else:
        logger.warning(f"Model file not found at {MODEL_PATH}. Prediction endpoints will return mock data.")

# Pydantic schema for input data validation
class PredictionInput(BaseModel):
    features: List[float]

# Pydantic schema for output data
class PredictionOutput(BaseModel):
    prediction: List[Any]
    status: str

@app.get("/health")
def health_check() -> Dict[str, str]:
    """Verify service and model status."""
    return {
        "status": "healthy",
        "model_loaded": str(model is not None)
    }

@app.post("/predict", response_model=PredictionOutput)
def predict(payload: PredictionInput):
    """Generate model predictions from inputs."""
    global model
    
    # If model is loaded, run actual inference
    if model is not None:
        try:
            # Reshape input as required by scikit-learn
            input_data = [payload.features]
            preds = model.predict(input_data)
            return {
                "prediction": preds.tolist(),
                "status": "success"
            }
        except Exception as e:
            logger.error(f"Inference error: {str(e)}")
            raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")
            
    # Mock inference fallback if model is not yet placed in directory
    else:
        logger.warning("Serving mock prediction (no model loaded)")
        # Simple placeholder prediction based on input size
        mock_pred = [sum(payload.features) / len(payload.features) if payload.features else 0.0]
        return {
            "prediction": mock_pred,
            "status": "mocked (place best_model.pkl in models/ directory)"
        }
