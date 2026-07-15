import os
import logging
from typing import Dict, Any, List

logger = logging.getLogger("mlops-serving-api-utils")

def preprocess_video(video_path: str) -> Any:
    """
    Applies preprocessing to the uploaded video file.
    TODO: Integrate the exact frame extraction, resizing, normalization,
    and sequence formatting required for MobileNetV2-LSTM / EfficientNet-BiLSTM models.
    """
    logger.info(f"Preprocessing video: {video_path}")
    # Example placeholder return:
    # 1. Read frames using cv2.VideoCapture
    # 2. Resize frames (e.g. 224x224)
    # 3. Create sequence batch of fixed length (e.g. 16 or 30 frames)
    # 4. Convert to normalized numpy array/tensor
    return None
