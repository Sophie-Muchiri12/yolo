# Configuration Management with Ansible & Terraform

## 🚀 Project Overview

The Yolo (master branch) demonstrates  practices using Infrastructure as Code (IaC) and Configuration Management to automate the deployment of the containerized e-commerce application. The project is implemented in two progressive stages:

- **Stage 1**: Pure Ansible automation for configuration management
- **Stage 2**: Terraform + Ansible integration for complete infrastructure automation

## 🏗️ Architecture

### Application Stack
- **Frontend**: React-based e-commerce client
- **Backend**: Node.js/Express REST API
- **Database**: MongoDB with persistent data storage
- **Containerization**: Docker containers with inter-service networking
- **Infrastructure**: Vagrant-provisioned Ubuntu VMs

### Technology Stack
- **Configuration Management**: Ansible
- **Infrastructure Provisioning**: Terraform (Stage 2)
- **Containerization**: Docker & Docker Compose
- **Virtualization**: Vagrant + VirtualBox
- **Version Control**: Git with feature branching



## 🎯 Stage 1: Ansible Configuration Management

### Overview
Stage 1 demonstrates pure Ansible automation for deploying a containerized application stack. This stage focuses on configuration management, role-based organization, and automated deployment workflows.

### Key Features
- **Role-based Architecture**: Modular Ansible roles for each service
- **Idempotent Deployments**: Safe to run multiple times
- **Error Handling**: Comprehensive error handling with blocks/rescue
- **Tag-based Execution**: Selective deployment of components
- **Variable Management**: Centralized configuration management
- **Container Management**: Docker container lifecycle management
- **Data Persistence**: MongoDB data persistence across restarts
- **Network Management**: Docker network configuration
- 

### Prerequisites
```bash
# Install required tools
sudo apt update
sudo apt install -y ansible vagrant virtualbox git curl

# Verify installations
ansible --version    # Should be 2.9+
vagrant --version    # Should be 2.2+
```


#### Quick Start
```bash
# Clone the repository
git clone https://github.com/Sophie-Muchiri12/yolo.git
cd yolo

# Start VM and deploy application
vagrant up
ansible-playbook playbook.yml

# Access the application
# Frontend: http://localhost:3000
# Backend:  http://localhost:5000
# MongoDB:  mongodb://localhost:27017
```

#### Step-by-Step Deployment
```bash
# 1. Start and configure VM
vagrant up

# 2. Test Ansible connectivity
ansible webservers -m ping

# 3. Run complete deployment
ansible-playbook playbook.yml


# 4. Verify deployment

http://localhost:5000/api
http://localhost:3000
```

#### Stage 1 Role Descriptions

**Common Role** (`roles/common/`)
- System package installation and updates
- Application directory creation
- Repository cloning from GitHub
- User and permission management

**Docker Role** (`roles/docker/`)
- Docker and Docker Compose installation
- Docker service configuration
- User group management
- Docker network creation

**Database Role** (`roles/database/`)
- MongoDB container deployment
- Data volume management
- Database initialization
- Health check verification

**Backend Role** (`roles/backend/`)
- Node.js API container building
- Environment variable configuration
- Database connection setup
- API health verification

**Frontend Role** (`roles/frontend/`)
- React application container building
- Static asset management
- Backend API connection
- Web server configuration



<img width="1200" height="690" alt="image" src="https://github.com/user-attachments/assets/8bd16dcb-867a-47c8-829f-0f64676b1e36" />


### Stage 2: Terraform + Ansible Integration

#### Architecture
This stage implements a hybrid IaC approach where:

Terraform handles infrastructure provisioning (VM creation, networking, etc.)
Ansible manages configuration and application deployment
Integration allows both tools to invoke each other for seamless automation

#### Key Features
🚀 Single Command Deployment
bash
```
ansible-playbook deploy.yml

```

This  will:

Provision infrastructure using Terraform
Configure the provisioned resources
Deploy the complete YOLO e-commerce application


<img width="1291" height="687" alt="image" src="https://github.com/user-attachments/assets/49692d6b-ebd4-44e3-8229-0a08deedac01" />


#### Project Commits:

Check all closed pull requests, their messages and number of commits on each closed pull request



#### Pure Dockerized work

My complete dockerized implementation is available in the docker-main branch. This branch contains the pure Docker setup for the entire project.
