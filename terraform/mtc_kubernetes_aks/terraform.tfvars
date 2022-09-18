resource_group_name = "mtc_aks_terraform_rg"
location            = "West Europe"
cluster_name        = "mtc-terraform-aks"
kubernetes_version  = "1.23.8" # always put latest version
system_node_count   = 3
node_resource_group = "mtc_aks_terraform_resources_rg"