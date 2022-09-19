# Terraform - Create Key Vault with Secret 

## Commands

#### Initialize terraform Azure modules
```
terraform init
```

####  Plan and preview terraform changes
```
terraform plan -out tfplan
```

#### Show the tfplan file
terraform show -json tfplan
terraform show -json tfplan >> tfplan.json

#### Format tfplan.json file
terraform show -json tfplan | jq '.' > tfplan.json

#### Deploy terraform infra
```
terraform apply
```

#### Destroy infra
```
terraform destroy
```