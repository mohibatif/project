import os
import tempfile
import logging
from typing import Dict, Any, List
import joblib
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, status, Request
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger("mlops-serving-api")

app = FastAPI(
    title="ANN HAR API",
    description="FastAPI service for Human Activity Recognition model deployment.",
    version="1.0.0"
)

# 1. Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Resolve directories
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS_DIR = os.path.join(BASE_DIR, "models")
FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")

import torch

# Model files
MODEL_V1_PATH = os.path.join(MODELS_DIR, "best_model_v1.pth")
MODEL_V2_PATH = os.path.join(MODELS_DIR, "best_model_v2.pth")

models = {}

@app.on_event("startup")
def load_models():
    """Loads v1 and v2 models from disk on startup if they exist."""
    global models
    # V1 model loading
    if os.path.exists(MODEL_V1_PATH):
        try:
            # Using PyTorch to load .pth models
            models["v1"] = torch.load(MODEL_V1_PATH, map_location=torch.device('cpu'))
            logger.info(f"Loaded V1 model from {MODEL_V1_PATH}")
        except Exception as e:
            logger.error(f"Failed to load V1 model: {str(e)}")
    else:
        logger.warning(f"V1 model not found at {MODEL_V1_PATH}. Will fallback to mock predictions.")

    # V2 model loading
    if os.path.exists(MODEL_V2_PATH):
        try:
            models["v2"] = torch.load(MODEL_V2_PATH, map_location=torch.device('cpu'))
            logger.info(f"Loaded V2 model from {MODEL_V2_PATH}")
        except Exception as e:
            logger.error(f"Failed to load V2 model: {str(e)}")
    else:
        logger.warning(f"V2 model not found at {MODEL_V2_PATH}. Will fallback to mock predictions.")

# 2. API Endpoints

@app.get("/health", status_code=status.HTTP_200_OK)
def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}

@app.post("/predict")
async def predict(
    video: UploadFile = File(...),
    model: str = Form(...)
):
    """
    Receives an uploaded video and model selection, performs preprocessing,
    runs inference, and returns prediction results.
    """
    logger.info(f"Received prediction request. Model: {model}, File: {video.filename}")
    
    # Verify file is a video
    content_type = video.content_type or ""
    if not (content_type.startswith("video/") or video.filename.lower().endswith((".mp4", ".avi", ".mov"))):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Uploaded file is not a valid video format."
        )

    # Save to a temporary file for local processing
    try:
        suffix = os.path.splitext(video.filename)[1]
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as temp_file:
            content = await video.read()
            temp_file.write(content)
            temp_path = temp_file.name
    except Exception as e:
        logger.error(f"Failed to save uploaded file: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to process file upload: {str(e)}"
        )

    try:
        # Preprocessing placeholder
        # TODO: Apply preprocessing pipeline to the video at temp_path
        # e.g., frames = preprocess_video(temp_path)
        
        # Inference
        selected_model = models.get(model)
        if selected_model is not None:
            # TODO: Convert processed frames to the model's expected shape and execute
            # predictions = selected_model.predict(frames)
            # Map predictions to output classes
            pass

        # Fallback Mock predictions for demo / testing purposes
        # Format must match:
        # { "model": "Model V1", "predictions": [{"class": "Walking", "confidence": 95.5}, ...] }
        model_display_name = f"Model {model.upper()}"
        
        # Mock categories based on model selection
        if model == "v1":
            predictions = [
                {"class": "Billiards", "confidence": 92.4},
                {"class": "Bowling", "confidence": 4.1},
                {"class": "BandMarching", "confidence": 2.0},
                {"class": "ApplyLipstick", "confidence": 1.2},
                {"class": "BabyCrawling", "confidence": 0.3}
            ]
        elif model == "v2":
            predictions = [
                {"class": "WalkingWithDog", "confidence": 88.5},
                {"class": "Skiing", "confidence": 6.8},
                {"class": "Rafting", "confidence": 2.4},
                {"class": "BoxingPunchingBag", "confidence": 1.5},
                {"class": "Basketball", "confidence": 0.8}
            ]
        else:  # v2ft
            predictions = [
                {"class": "IceDancing", "confidence": 95.1},
                {"class": "SalsaSpin", "confidence": 3.0},
                {"class": "FrisbeeCatch", "confidence": 1.1},
                {"class": "Drumming", "confidence": 0.5},
                {"class": "TaiChi", "confidence": 0.3}
            ]

        return {
            "model": model_display_name,
            "predictions": predictions
        }

    except Exception as e:
        logger.error(f"Inference processing failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Inference processing error: {str(e)}"
        )
    finally:
        # Clean up temporary file
        if os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except Exception as e:
                logger.warning(f"Failed to remove temp file {temp_path}: {str(e)}")

# 3. Static File Serving / Root handler

@app.get("/")
def read_root(request: Request):
    """
    Serves the frontend dashboard for browser clients,
    and a JSON welcome response for API clients.
    """
    accept = request.headers.get("accept", "")
    if "text/html" in accept:
        index_path = os.path.join(FRONTEND_DIR, "index.html")
        if os.path.exists(index_path):
            return FileResponse(index_path)
    return {"message": "ANN HAR API running"}

# Serve remaining static frontend assets (style.css, script.js, pngs, etc.)
if os.path.exists(FRONTEND_DIR):
    app.mount("/", StaticFiles(directory=FRONTEND_DIR), name="static")
