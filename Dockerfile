# =====================================================================
# Production-ready Dockerfile for FastAPI Machine Learning Inference
# =====================================================================

# Step 1: Use an official lightweight Python 3.11 slim runtime as the base image
# Slim images are optimized for production, keeping container size small and secure
FROM python:3.11-slim

# Step 2: Set environment variables
# - PYTHONDONTWRITEBYTECODE: Prevents Python from writing .pyc files to disk (reduces container size)
# - PYTHONUNBUFFERED: Forces standard output streams to be unbuffered (ensures logs are emitted instantly to stdout)
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8000

# Step 3: Create a working directory inside the container
WORKDIR /app

# Step 4: Install system build dependencies required for compiling Python packages
# - --no-install-recommends limits package install size
# - rm -rf cleans package caches to keep the image layer thin
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Step 5: Copy requirements.txt separately to leverage Docker cache
# This ensures that packages are only re-installed if requirements.txt changes
COPY requirements.txt .

# Step 6: Install Python dependencies
# - --no-cache-dir reduces container size by avoiding caching wheel packages
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Step 7: Copy the rest of the project source files into the working directory
# We copy directories individually to keep the image structure neat
COPY src/ ./src/
COPY deployment/ ./deployment/
COPY models/ ./models/

# Step 8: Create a non-root user and group for security best practices
# Running containers as root is a major security risk. We run as an unprivileged user.
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser && \
    chown -R appuser:appuser /app

# Step 9: Switch to the newly created non-root user
USER appuser

# Step 10: Expose port 8000 to allow traffic to the container
EXPOSE ${PORT}

# Step 11: Set health check parameter to let Docker know when the API is ready (Best Practice)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')" || exit 1

# Step 12: Run the FastAPI application using Uvicorn in the exec format (JSON array)
# This format ensures SIGTERM signals are forwarded correctly to stop the app gracefully
CMD ["uvicorn", "deployment.app:app", "--host", "0.0.0.0", "--port", "8000"]
