variable "resource_group_name" {
  type        = string
  description = "Resource Group name"
}

variable "azurerm_provider_version" {
  type        = string
  description = "Terraform azure rm provider version"
}

variable "location" {
  type        = string
  description = "Deployment location in Azure"
}