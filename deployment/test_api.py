import requests

# Base URL of local FastAPI container
BASE_URL = "http://127.0.0.1:8000"

def test_health():
    """Tests the /health check endpoint."""
    url = f"{BASE_URL}/health"
    response = requests.get(url)
    print(f"Health Check status code: {response.status_code}")
    print(f"Health Check response: {response.json()}")

def test_prediction():
    """Tests the /predict endpoint with mock input features."""
    url = f"{BASE_URL}/predict"
    # Example input feature payload (floats)
    payload = {
        "features": [1.0, 2.0, 3.5, 4.2, 0.5]
    }
    response = requests.post(url, json=payload)
    print(f"Predict status code: {response.status_code}")
    print(f"Predict response: {response.json()}")

if __name__ == "__main__":
    print("Testing locally deployed FastAPI model serving...")
    try:
        test_health()
        print("-" * 40)
        test_prediction()
    except requests.exceptions.ConnectionError:
        print(f"Could not connect to FastAPI at {BASE_URL}.")
        print("Please start the server first using: uvicorn src.predict:app --reload")
