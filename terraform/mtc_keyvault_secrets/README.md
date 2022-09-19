# Terraform - Create Key Vault with Secret 

## Commands

#### Initialize terraform Azure modules
```cmd
> terraform init
```

####  Plan and preview terraform changes
```cmd
> terraform plan -out tfplan
```

#### Show the tfplan file
```cmd
> terraform show -json tfplan
> terraform show -json tfplan >> tfplan.json
```

#### Format tfplan.json file
```cmd
> terraform show -json tfplan | jq '.' > tfplan.json
```

#### Deploy terraform infra
```cmd
> terraform apply
```

#### Destroy infra
```cmd
> terraform destroy
```