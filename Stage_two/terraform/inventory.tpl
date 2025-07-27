[webservers]
stage2-server ansible_host=${vm_ip}

[webservers:vars]
ansible_user=vagrant
ansible_ssh_private_key_file=.vagrant/machines/default/virtualbox/private_key
ansible_python_interpreter=/usr/bin/python3
