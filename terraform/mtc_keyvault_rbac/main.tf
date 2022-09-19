resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_key_vault" "keyvault" {
  name                        = var.keyvault_name
  location                    = var.location
  resource_group_name         = azurerm_resource_group.rg.name
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  sku_name                    = "standard"
  # Enable RBAC Authorization for key vault 
  enable_rbac_authorization   = true
}

## Get Tenanat id and subscription
data "azurerm_client_config" "current" {}

## Role assignment for key vault 
resource "azurerm_role_assignment" "role-secret-officer" {
  role_definition_name = "Key Vault Secrets Officer"
  principal_id         = data.azurerm_client_config.current.object_id # Your own user in active directory / can use service principal
  scope                = azurerm_key_vault.keyvault.id
}

## Create a secret 
resource "azurerm_key_vault_secret" "database-password" {
  name         = var.secret_name
  value        = var.secret_value
  key_vault_id = azurerm_key_vault.keyvault.id

  depends_on   = [azurerm_role_assignment.role-secret-officer]
}

## Role assignment for secret 
resource "azurerm_role_assignment" "role-secret-user" {
  role_definition_name = "Key Vault Secrets User"
  principal_id         = data.azurerm_client_config.current.object_id # Your own user in active directory / can use service principal
  scope                = "${azurerm_key_vault.keyvault.id}/secrets/${azurerm_key_vault_secret.database-password.name}"
  // scope                = "/subscriptions/xxxxxxxxx/resourceGroups/kv_rbac_terraform_rg/providers
  //                         /Microsoft.KeyVault/vaults/demokv01093/secrets/MySecret"
  // scope                = azurerm_key_vault_secret.database-password.id
}