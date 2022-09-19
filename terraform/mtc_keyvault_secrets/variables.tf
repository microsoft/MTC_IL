variable "location" {
  type        = string
  description = "Deployment location in Azure"
}

variable "resource_group_name" {
  type        = string
  description = "Resource Group name"
}

variable "keyvault_name" {
  type        = string
  description = "Key Vault name"  
}

variable "secret_name" {
  type        = string
  description = "Key Vault Secret name"
}

variable "secret_value" {
  type        = string
  description = "Key Vault Secret value"
  sensitive   = true # hide from terraform output
}