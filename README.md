# YOLO E-commerce Application - Kubernetes Deployment

A full-stack e-commerce application featuring a Node.js/Express backend API, React frontend, and MongoDB database, containerized and deployed on Google Kubernetes Engine (GKE).

## 🚀 Live Application

### 🌐 Demo Instance (Always Available)
**Live Demo URL**: 
frontend:`http://34.134.139.245/` 
backend-api-fetch: `http://34.134.71.143:5000/api/products`

> **Note**: This is my deployed instance running on my GKE cluster

### 🛠️ Deploy Your Own Instance
Follow the instructions below to deploy on your own GKE cluster and get your own unique URL.

## 📋 Project Overview

This project demonstrates the containerization and orchestration of a three-tier e-commerce application using Docker and Kubernetes. The application includes:

- **Frontend**: React.js application for user interface
- **Backend**: Node.js/Express API server
- **Database**: MongoDB with persistent storage



## 📦 Prerequisites

- Google Cloud Platform account with GKE enabled
- `kubectl` configured to connect to your GKE cluster
- Docker images pushed to Docker Hub:
  - `sophiesky12/clients-latest:v1.0.0`
  - `sophiesky12/backend-final:v1.0.0`

## 🚀 How to Run This Project

### Prerequisites
- Google Cloud Platform account with billing enabled
- `gcloud` CLI installed and authenticated  
- `kubectl` installed
- Git installed

### Step 1: Clone and Setup
```bash
# Clone the repository
git clone https://github.com/Sophie-Muchiri12/yolo.git
cd yolo

# Verify you have the required tools
gcloud version
kubectl version --client
```

### Step 2: Create GKE Cluster
```bash
# Create cluster (takes 5-10 minutes)
gcloud container clusters create yolo-cluster \
    --num-nodes=3 \
    --zone=us-central1-a \
    --machine-type=e2-small

# Get cluster credentials
gcloud container clusters get-credentials yolo-cluster --zone=us-central1-a

# Verify connection
kubectl get nodes
```

### Step 3: Deploy Application
```bash

# 1. Deploy MongoDB StatefulSet
kubectl apply -f k8s/mongodb-statefulset.yaml

# 2. Deploy Backend
kubectl apply -f k8s/backend-deployment.yaml

# 3. Deploy Frontend
kubectl apply -f k8s/frontend-deployment.yaml

# 4. Check status
kubectl get pods,services
```

### Step 4: Access Your Application
```bash
# Get YOUR unique external IP (will be different from the demo)
kubectl get all

# Once EXTERNAL-IP appears (not <pending>):
# Your application will be at: http://[YOUR-UNIQUE-EXTERNAL-IP]
```

**Important**: Your deployed instance will have a **different IP address** than the demo URL above. Each GKE cluster gets its own unique external IP addresses.

### Step 5: Verify Functionality
1. Open application in browser
2. Add items to cart


## 📁 Project Structure

```
yolo/
├── k8s/
│   ├── mongodb-statefulset.yaml      # MongoDB StatefulSet with persistent storage
│   ├── backend-deployment.yaml       # Backend API deployment and service
│   ├── frontend-deployment.yaml      # Frontend deployment and LoadBalancer service
                       # Cleanup script
├── README.md                        # This file
└── explanation.md                   # Detailed implementation explanation
```





## 🗄️ Database Persistence

The application uses a **StatefulSet** for MongoDB deployment with persistent volumes:
- Data persists across pod restarts and rescheduling
- Uses Google Persistent Disk for reliable storage
- Automatic volume provisioning through PVC templates


## 🔍 Monitoring and Troubleshooting

### Check Application Status
```bash
# View all pods
kubectl get pods

# Check service endpoints
kubectl get services

# View persistent volumes
kubectl get pv,pvc

# Check pod logs
kubectl logs -f deployment/backend-deployment
kubectl logs -f deployment/frontend-deployment
kubectl logs -f mongodb-0
```

### Common Issues

1. **Pods not starting**: Check `kubectl describe pod [pod-name]` for detailed error information
2. **Service not accessible**: Verify external IP assignment with `kubectl get services`
3. **Database connection errors**: Ensure MongoDB pod is running and ready


## 🏷️ Image Tags and Versions

- **Frontend**: `sophie-muchiri12/yolo-frontend:latest`
- **Backend**: `sophiesky12/clients-latest:v1.0.0`
ntainerization best practices
