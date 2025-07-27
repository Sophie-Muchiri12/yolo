Vagrant.configure("2") do |config|
  config.vm.box = "${vm_box}"
  config.vm.hostname = "${vm_name}"
  
  # Network configuration
  config.vm.network "private_network", ip: "${vm_ip}"
  config.vm.network "forwarded_port", guest: ${frontend_port}, host: ${frontend_port}
  config.vm.network "forwarded_port", guest: ${backend_port}, host: ${backend_port}
  config.vm.network "forwarded_port", guest: ${mongodb_port}, host: ${mongodb_port}
  
  # VM resources
  config.vm.provider "virtualbox" do |vb|
    vb.name = "${vm_name}"
    vb.memory = "${vm_memory}"
    vb.cpus = ${vm_cpus}
  end
  
  # Basic provisioning
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y python3 python3-pip
    pip3 install docker docker-compose
  SHELL
end
