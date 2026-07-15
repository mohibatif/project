import os
import sys
from fastapi.testclient import TestClient

# Add src directory to path
sys.path.append(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src"))

from predict import app

client = TestClient(app)

def test_health():
    """Verify health endpoint works."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"

def test_predict_mock():
    """Verify model predict endpoint functions correctly (fallback/mock mode)."""
    response = client.post(
        "/predict",
        json={"features": [1.0, 2.0, 3.0]}
    )
    assert response.status_code == 200
    assert "prediction" in response.json()
    assert "status" in response.json()
