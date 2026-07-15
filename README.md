# Production-Grade MLOps Project Serving Pipeline

This repository hosts a production-ready MLOps serving pipeline for deploying and monitoring a machine learning model originally trained on Kaggle. The project is designed with modularity and scalability in mind, using industry-standard tools to log, package, serve, and orchestrate the model.

## 🚀 Project Overview
- **Model Training**: The model was trained offline on Kaggle. The final serialized model artifact (`best_model.pkl`) is loaded for inference.
- **Experiment Tracking**: **MLflow** tracks parameters, metrics, and manages the model registry.
- **Model Serving**: **FastAPI** serves high-performance HTTP REST endpoints for real-time predictions.
- **Containerization**: **Docker** packages the FastAPI application safely using non-root security standards.
- **Continuous Integration**: **GitHub Actions** automates code linting, tests, and validates Docker builds.
- **Orchestration**: **Kubernetes** deploys and scales the model serving container with automated health probes.

---

## 📂 Folder Structure
The repository is organized following clean MLOps architectural principles:

```text
project/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub actions automation for testing and build verification
├── data/
│   └── .gitkeep                # Directory for local datasets (git-ignored)
├── deployment/
│   ├── app.py                  # Production FastAPI serving gateway
│   └── test_api.py             # Script to verify inference endpoints locally
├── kubernetes/
│   ├── deployment.yaml         # Kubernetes deployment configuration (replicas, probes)
│   └── service.yaml            # LoadBalancer service manifest to expose pods
├── models/
│   └── .gitkeep                # Folder where 'best_model.pkl' must be placed
├── src/
│   ├── __init__.py
│   ├── predict.py              # Auxiliary prediction routines
│   └── utils.py                # Helper modules (custom logger configurations)
├── tests/
│   └── test_predict.py         # Pytest test suite for validation checks
├── training/
│   └── mlflow_tracking.py      # MLflow registration script for pre-trained model
├── mlruns/                     # Local experiment metadata tracking storage
│
├── Dockerfile                  # Production container guidelines (Python 3.11-slim)
├── requirements.txt            # Project python dependencies
├── .gitignore                  # Keeps caches and binaries out of Git history
└── README.md                   # Project documentation (this file)
```

---

## 🛠️ Installation

### 1. Setup Virtual Environment
Create a clean environment using Python 3.11:
```bash
# Create environment
python -m venv venv

# Activate environment (Windows)
venv\Scripts\activate

# Activate environment (Mac/Linux)
source venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Add Pre-trained Model
Copy your Kaggle-trained `best_model.pkl` into the `models/` directory:
```bash
cp /path/to/your/best_model.pkl models/
```

---

## 📈 Running MLflow
Log metadata, metrics, and parameters from your Kaggle run into the MLflow tracking registry:

1. **Log Model Metadata**:
   ```bash
   python training/mlflow_tracking.py
   ```
2. **Start the MLflow UI Dashboard**:
   ```bash
   mlflow ui --backend-store-uri sqlite:///mlflow.db
   ```
   *Navigate to `http://127.0.0.1:5000` to review runs, metrics curves, and download logged model artifacts.*

---

## 🔌 Running FastAPI
Start the local prediction gateway using the Uvicorn ASGI server:

```bash
uvicorn deployment.app:app --host 0.0.0.0 --port 8000 --reload
```
*Once running, visit `http://127.0.0.1:8000/docs` to interact with the API using Swagger UI.*

### API Endpoints
The serving gateway exposes three core endpoints:

| Method | Endpoint | Description |
|---|---|---|
| **GET** | `/` | Root endpoint displaying basic API status and metadata. |
| **GET** | `/health` | Kubernetes probes endpoint checking if the server is healthy and if the model is loaded. |
| **POST** | `/predict` | Predicts outputs from inputs. Includes custom `TODO` labels to map your specific preprocess features. |

### Test Predictions
From a separate terminal, test the local server:
```bash
python deployment/test_api.py
```

---

## 🐳 Docker Commands
Create and run the application container using best-practice security constraints:

1. **Build Docker Image**:
   ```bash
   docker build -t model-serving:latest .
   ```
2. **Run Docker Container**:
   ```bash
   docker run -p 8000:8000 --name serving-instance model-serving:latest
   ```

---

## 🐙 GitHub Actions
The workflow file [ci.yml](.github/workflows/ci.yml) executes automatically on every push event to the `main` branch:
- **Dependency Install**: Restores cached pip packages and installs requirements.
- **Verification**: Programmatically tests successful imports of MLflow, FastAPI, and your custom `deployment.app` API gateway.

---

## ☸️ Kubernetes Deployment
Orchestrate and scale the serving layer within a Kubernetes cluster:

1. **Deploy to Cluster**:
   ```bash
   kubectl apply -f kubernetes/deployment.yaml
   kubectl apply -f kubernetes/service.yaml
   ```
2. **Verify Pods & Probes Status**:
   ```bash
   kubectl get pods -l app=ml-api
   ```
3. **Retrieve LoadBalancer IP**:
   ```bash
   kubectl get service ml-api-service
   ```

---

## 🔮 Future Improvements
To take this MLOps pipeline to the next level:
- [ ] **Feature Store Integration**: Implement Feast or Hopsworks to serve training and inference features dynamically.
- [ ] **Model Monitoring**: Integrate Prometheus and Grafana to track prediction drift and response latencies.
- [ ] **Trident-grade CI/CD**: Hook GitHub actions directly to AWS ECR or Google Artifact Registry to push built images on release tags.
- [ ] **Auto-scaling**: Configure Horizontal Pod Autoscaler (HPA) to scale pods based on request concurrency or CPU limits.
