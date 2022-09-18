variable "resource_group_names" {
  type    = map
  default = {
    dev  = "mtc-resource-group-dev"
    test = "mtc-resource-group-test"
    prod = "mtc-resource-group-prod"
  }
}

resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_names[terraform.workspace]
  location = var.location
}