# Terraform - Create Resource Groups in different environments - Dev, Test, Prod

## Commands

#### Initialize terraform Azure modules
```
terraform init
```

#### List existing workspaces
```
terraform workspace list
```

#### Create dev workspace and apply the changes
```
terraform workspace new dev
terraform workspace list 
terraform plan -out dev.tfplan
terraform apply dev.tfplan
```

#### Create test workspace and apply the changes
```
terraform workspace new test
terraform workspace list 
terraform plan -out test.tfplan
terraform apply test.tfplan
```


#### Create prod workspace and apply the changes
```
terraform workspace new prod
terraform workspace list 
terraform plan -out prod.tfplan
terraform apply prod.tfplan
```


