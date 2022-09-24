resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}


# Create the Linux App Service Plan
resource "azurerm_service_plan" "appserviceplan" {
  name                = var.app_service_plan_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "B1"
}

# Create the web app, pass in the App Service Plan ID
resource "azurerm_linux_web_app" "webapp" {
  name                = var.app_service_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.appserviceplan.id
  https_only          = true
  site_config {
    minimum_tls_version = "1.2"
    always_on           = false
    application_stack {
      node_version = "16-lts"
    }
  }
}


#  Deploy code from a public GitHub repo
resource "azurerm_app_service_source_control" "sourcecontrol" {
  app_id                 = azurerm_linux_web_app.webapp.id
  repo_url               = "https://github.com/microsoft/MTC_IL_Nodejs_Hello_World"
  branch                 = "main"
  use_manual_integration = true
}