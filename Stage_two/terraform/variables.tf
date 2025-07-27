variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "yolo-ecommerce"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "development"
}

variable "vm_name" {
  description = "Name of the virtual machine"
  type        = string
  default     = "yolo-stage2-vm"
}

variable "vm_box" {
  description = "Vagrant box to use"
  type        = string
  default     = "geerlingguy/ubuntu2004"
}

variable "vm_memory" {
  description = "VM memory in MB"
  type        = number
  default     = 2048
}

variable "vm_cpus" {
  description = "Number of CPU cores"
  type        = number
  default     = 2
}

variable "vm_ip" {
  description = "VM IP address"
  type        = string
  default     = "192.168.56.20"
}

variable "frontend_port" {
  description = "Frontend application port"
  type        = number
  default     = 3000
}

variable "backend_port" {
  description = "Backend API port"
  type        = number
  default     = 5000
}

variable "mongodb_port" {
  description = "MongoDB port"
  type        = number
  default     = 27017
}

variable "repo_url" {
  description = "Application repository URL"
  type        = string
  default     = "https://github.com/Sophie-Muchiri12/yolo.git"
}

variable "app_directory" {
  description = "Application deployment directory"
  type        = string
  default     = "/home/vagrant/yolo"
}
