variable "location" {
  type        = string
  description = "Deployment location in Azure"
}

variable "resource_group_name" {
  type        = string
  description = "Resource Group name"
}

variable "cluster_name" {
  type        = string
  description = "AKS Cluster name"
}

variable "kubernetes_version" {
  type        = string
  description = "Kubernetes version"
}

variable "system_node_count" {
  type        = number
  description = "Number of AKS worker nodes"
}

variable "node_resource_group" {
  type        = string
  description = "RG name for cluster resources"
}