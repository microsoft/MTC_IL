# Terraform - Create Nodejs WebApp 
- Create a resource group 
- Create a service plan - Linux B1 
- Create a linux web app with node version 16 lts
- Pull nodejs app from github public repository

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