# Terraform - Create 2 VMS - Bastion , Windows VM
- Creating 1 Vnet
- Creating 2 Subnets - 1 for bastion vm and second for normal windows vm
- Creating 1 Bastion and 1 Windows 10 VM
- Allow Connection from Bastion to Windows 10 VM

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