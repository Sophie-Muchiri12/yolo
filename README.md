# Client Frontend – Dockerized React App

This repository contains the **frontend client application**, built with React, and containerized using **Docker** with a multi-stage build for optimal image size.

## 🚀 Features

- React frontend setup
- Multi-stage Docker build for production optimization
- Clean `.gitignore` for client-specific files
- Docker image push to Docker Hub

## 🗂️ Project Structure

```
root/
├── client/
│   ├── Dockerfile
│   ├── .gitignore
│   ├── package.json
│   └── src/
└── README.md
```

## 🐳 Docker Setup

### 🔧 Build Docker Image

Make sure you're in the root directory. Then run:

```bash
sudo docker build --no-cache -t sophiesky12/client-app:latest -f client/Dockerfile client/
```

### 🛠 Dockerfile (client/Dockerfile)

This project uses a multi-stage Dockerfile

### 📤 Push to Docker Hub (Semantic versioning)

After building the image, push it to Docker Hub:

```bash
sudo docker push sophiesky12/client-app:v1.0.0
```

Client image at:
👉 [https://hub.docker.com/repository/docker/sophiesky12/client-app](https://hub.docker.com/repository/docker/sophiesky12/client-app)



## 🧑‍💻 Author

**Sophie**
- Docker Hub: [sophiesky12](https://hub.docker.com/u/sophiesky12)

