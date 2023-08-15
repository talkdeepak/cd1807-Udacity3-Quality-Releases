resource "azurerm_service_plan" "az_serv_plan" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = var.location
  resource_group_name = var.resource_group
  os_type             = "Windows"
  sku_name            = "F1"
}

resource "azurerm_windows_web_app" "az_Windows_WebApp" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = var.location
  resource_group_name = var.resource_group
  service_plan_id     = azurerm_service_plan.az_serv_plan.id

  app_settings = {
    "WEBSITE_RUN_FROM_PACKAGE"     = 0
    SCM_DO_BUILD_DURING_DEPLOYMENT = true
  }
  site_config {
    always_on                = false
    remote_debugging_enabled = true
    application_stack {
      dotnet_version = "v6.0"
    }
  }
}