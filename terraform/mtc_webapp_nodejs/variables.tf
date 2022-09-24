variable "location" {
  type        = string
  description = "Deployment location in Azure"
}

variable "resource_group_name" {
  type        = string
  description = "Resource Group name"
}

variable "app_service_plan_name" {
  type        = string
  description = "App Service Plan"
}

variable "app_service_name" {
  type        = string
  description = "App Service name"
}