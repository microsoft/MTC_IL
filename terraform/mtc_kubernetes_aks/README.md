# Terraform - Create AKS Cluster
## Commands

#### Format the tf files 
```sh
$ terraform fmt
```

#### Initialize terraform Azure modules
```sh
$ terraform init
```

#### Validate terraform templates
```sh
$ terraform validate
```

#### Plan and save the changes into tfplan file
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

#### Show only the changes 
```sh
$ cat tfplan.json | jq -r '(.resource_changes[] | [.change.actions[], .type, .change.after.name]) | @tsv'
$ cat tfplan.json | jq '[.resource_changes[] | {type: .type, name: .change.after.name, actions: .change.actions[]}]' 
```

#### Apply the infra changes to Azure
```sh
$ terraform apply tfplan
```

#### Delete the infra from Azure
```sh
$ terraform destroy
```