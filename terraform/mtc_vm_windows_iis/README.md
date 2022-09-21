# Terraform - Create 2 VMS - Bastion , Windows VM
- Creating 1 Vnet
- Creating 1 Subnet
- Creating 1 VM - Windows Server 2019 Gen 2 
- Creating Public ip for VM
- Creating Network Security Group and Allow ports: 3389, 80
- Creating Network Interface 
- Associate NSG to Nic 
- Install Internet Information Services Web Server

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