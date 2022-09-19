variable "location" {
  type        = string
  description = "Deployment location in Azure"
}

variable "resource_group_name" {
  type        = string
  description = "Resource Group name"
}

variable "virtual_network_name" {
  type        = string
  description = "Virtual Network name"
}

variable "subnet_name" {
  type        = string
  description = "Subnet name"
}

variable "public_ip_name" {
  type        = string
  description = "Public Ip name"
}

variable "network_interface_name" {
  type        = string
  description = "Network interface name"
}

variable "windows_vm_name" {
  type        = string
  description = "Windows VM name"
}