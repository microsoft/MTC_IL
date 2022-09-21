# Terraform - Create Windows Server VM with IIS 
- Create a virtul network 
- Create a subnet
- Create a public IP address
- Create a network security group and allow ports: RDP - 3389, HTTP - 80
- Create a virtual network interface card
- Connect the network security group to the network interface
- Create a virtual machine
- Install an internet information services ( IIS ) Web Server

## Commands

#### Initialize terraform Azure modules
```sh
$ terraform init
```

####  Plan and preview terraform changes
```sh
$ terraform plan -out tfplan
```

#### Show the tfplan file
```sh
$ terraform show -json tfplan
$ terraform show -json tfplan >> tfplan.json
```

#### Format tfplan.json file
```sh
$ terraform show -json tfplan | jq '.' > tfplan.json
```

#### Deploy terraform infra
```sh
$ terraform apply
```

#### Destroy infra
```sh
$ terraform destroy
```