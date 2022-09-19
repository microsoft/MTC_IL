# Terraform - Create Key Vault with Secret and grant access with rbac authorization to keyvault and to secret

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