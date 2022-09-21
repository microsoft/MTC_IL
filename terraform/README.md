# Terraform Scripts for Azure Resource Creation

Terraform scripts to help you manage/create your resources in Azure Cloud environment.

# Terraform Azure Flow Diagram

![alt text](./architecture/terraform-azure-architecture.png?raw=true)


# Table of Contents
- [Resource Group](./mtc_resource_group/)
- [Resource Group For Multpile Environments With Workspaces](./mtc_workspaces_resource_group/)
- [Kubernetes AKS](./mtc_kubernetes_aks/)
- [Key Vault with Secrets](./mtc_keyvault_secrets/)
- [Key Vault with Secrets with RBAC Authorization](./mtc_keyvault_rbac/)
- [Storageaccount with blob and container](./mtc_storageaccount_container_blob/)
- [Linux Virtual Machine](./mtc_vm_linux/)
- [Windows Virtual Machine with Bastion](./mtc_vm_windows_bastion/)
- [Windows Virtual Machine with IIS](./mtc_vm_windows_iis/)

# Getting Started 

First, follow the quick start guide for either [Windows](#quick-start-windows), or [MacOS](#quick-start-mac), or [Linux](#quick-start-linux), depending on what you're using.


## Quick Start: Windows

Prerequisites:
- Azure Subscription - [documentation](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions)
- Azure CLI - [documentation](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli)
- Terraform CLI - [documentation](https://learn.hashicorp.com/tutorials/terraform/install-cli)

## Quick Start: MacOS

Prerequisites:
- Azure Subscription - [documentation](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions) 
- Azure CLI - [documentation](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos)
- Terraform CLI - [documentation](https://learn.hashicorp.com/tutorials/terraform/install-cli)


## Quick Start: Linux

Prerequisites:
- Azure Subscription - [documentation](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions)
- Azure CLI - [documentation](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-linux?pivots=apt)
- Terraform CLI - [documentation](https://learn.hashicorp.com/tutorials/terraform/install-cli)

## Links

- [Azure Terraform Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)