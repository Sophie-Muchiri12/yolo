output "vm_ip" {
  description = "IP address of the provisioned VM"
  value       = var.vm_ip
}

output "vm_name" {
  description = "Name of the provisioned VM"
  value       = var.vm_name
}

output "application_urls" {
  description = "Application access URLs"
  value = {
    frontend = "http://${var.vm_ip}:${var.frontend_port}"
    backend  = "http://${var.vm_ip}:${var.backend_port}"
    mongodb  = "mongodb://${var.vm_ip}:${var.mongodb_port}"
  }
}

output "ansible_inventory" {
  description = "Path to generated Ansible inventory"
  value       = "${path.module}/../ansible/inventory/hosts"
}
