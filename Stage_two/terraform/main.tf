terraform {
  required_version = ">= 1.0"
  required_providers {
    vagrant = {
      source  = "bmatcuk/vagrant"
      version = "~> 4.0"
    }
  }
}

# Vagrant provider configuration
provider "vagrant" {}

# Create Vagrantfile from template
resource "local_file" "vagrantfile" {
  filename = "${path.module}/Vagrantfile"
  content = templatefile("${path.module}/Vagrantfile.tpl", {
    vm_name      = var.vm_name
    vm_box       = var.vm_box
    vm_memory    = var.vm_memory
    vm_cpus      = var.vm_cpus
    vm_ip        = var.vm_ip
    frontend_port = var.frontend_port
    backend_port  = var.backend_port
    mongodb_port  = var.mongodb_port
  })
}

# Vagrant VM resource
resource "vagrant_vm" "yolo_vm" {
  vagrantfile_dir = path.module
  
  depends_on = [local_file.vagrantfile]

  # Provisioner to run Ansible after VM is up
  provisioner "local-exec" {
    command = "sleep 30 && ansible-playbook -i ../ansible/inventory/hosts ../ansible/playbook.yml"
    working_dir = path.module
  }

  # Cleanup provisioner
  provisioner "local-exec" {
    when    = destroy
    command = "vagrant destroy -f"
    working_dir = path.module
  }
}

# Generate Ansible inventory
resource "local_file" "ansible_inventory" {
  filename = "${path.module}/../ansible/inventory/hosts"
  content = templatefile("${path.module}/inventory.tpl", {
    vm_ip = var.vm_ip
  })
  
  depends_on = [vagrant_vm.yolo_vm]
}
