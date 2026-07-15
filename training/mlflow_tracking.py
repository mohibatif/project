import os
import logging
import joblib
import mlflow
import mlflow.sklearn
from mlflow.models.signature import infer_signature
import numpy as np

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("mlflow-tracking")

# Define directories and paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "best_model.pkl")

def track_kagged_model():
    """Logs the already-trained Kaggle model, its metrics, parameters, and binary artifacts to MLflow."""
    
    # 1. Verify model file exists
    if not os.path.exists(MODEL_PATH):
        logger.error(f"Model file not found at {MODEL_PATH}")
        logger.info("Please place your best_model.pkl file in the models/ directory first.")
        return
        
    try:
        # Load the model (Do NOT retrain)
        logger.info(f"Loading pre-trained model from {MODEL_PATH}...")
        model = joblib.load(MODEL_PATH)
    except Exception as e:
        logger.error(f"Failed to load model: {str(e)}")
        return

    # 2. Setup MLflow Experiment and Local Tracking URI
    # By default, MLflow tracks runs locally in the project/mlruns/ folder.
    # Set custom local SQLite tracking database (recommended MLOps practice for local runs)
    db_path = os.path.join(BASE_DIR, "mlflow.db")
    mlflow.set_tracking_uri(f"sqlite:///{db_path}")
    
    experiment_name = "Kaggle_Model_Tracking"
    mlflow.set_experiment(experiment_name)
    logger.info(f"Using MLflow experiment: '{experiment_name}'")

    # Start MLflow run to log Kaggle metadata and artifacts
    with mlflow.start_run(run_name="kaggle-best-model-upload") as run:
        logger.info(f"Active MLflow run ID: {run.info.run_id}")

        # 3. Log Parameters from Kaggle training
        # TODO: Enter the actual hyperparameters you used during training on Kaggle
        params = {
            "model_type": type(model).__name__,
            "random_state": 42,
            # "n_estimators": 100,  # TODO: Update with your actual parameters
            # "learning_rate": 0.01, # TODO: Update with your actual parameters
        }
        mlflow.log_params(params)
        logger.info("Logged parameters successfully.")

        # 4. Log Metrics from Kaggle evaluation
        # TODO: Enter the actual metrics you obtained on Kaggle
        metrics = {
            "train_accuracy": 0.985,  # TODO: Enter actual training accuracy
            "val_accuracy": 0.941,    # TODO: Enter actual validation accuracy
            "test_accuracy": 0.943,   # TODO: Enter actual test accuracy
            # "f1_score": 0.932,      # TODO: Enter actual F1 score
            # "loss": 0.12,           # TODO: Enter actual loss
        }
        mlflow.log_metrics(metrics)
        logger.info("Logged metrics successfully.")

        # 5. Define Model Signature (Best Practice)
        # Signatures define expected input/output schemas for the deployment stage
        # We generate a dummy input matching the shape of feature list to infer schemas
        try:
            # Assumes 5 float features; adjust numbers of features to match your model
            dummy_input = np.array([[1.0, 2.0, 3.0, 4.0, 5.0]]) # TODO: Update dummy dimensions to match model features
            dummy_output = model.predict(dummy_input)
            signature = infer_signature(dummy_input, dummy_output)
        except Exception as e:
            logger.warning(f"Could not infer model signature (using None): {str(e)}")
            signature = None

        # 6. Log the Trained Model Object (Enables Model Registry)
        mlflow.sklearn.log_model(
            sk_model=model,
            artifact_path="model",
            signature=signature,
            registered_model_name="HAR-Kaggle-BestModel"
        )
        logger.info("Model registered to MLflow Model Registry.")

        # 7. Log the Model File as an Artifact
        # This keeps a direct copy of the original best_model.pkl file in MLflow storage
        mlflow.log_artifact(MODEL_PATH, artifact_path="original_model_file")
        logger.info(f"Model file logged as an artifact from {MODEL_PATH}")

        print("\n" + "="*50)
        print("MLflow Tracking Complete!")
        print(f"Run ID: {run.info.run_id}")
        print(f"Experiment Name: {experiment_name}")
        print(f"To view logged runs, run: mlflow ui --backend-store-uri sqlite:///{db_path}")
        print("="*50)

if __name__ == "__main__":
    track_kagged_model()
