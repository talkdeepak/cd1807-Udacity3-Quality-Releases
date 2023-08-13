resource "azurerm_network_interface" "nic" {
  name                = "${var.application_type}-${var.resource_type}-nic"
  location            = "eastus"#"var.location"
  resource_group_name = var.resource_group

  ip_configuration {
    name                          = "internal"
    subnet_id                     = "${var.subnet_id}"
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = "${var.public_ip}"
  }
}
# data "azurerm_image" "packerImage" {
#   resource_group_name = "Azuredev"
#   name = "LinuxVM3"
# }

resource "azurerm_linux_virtual_machine" "Linux_VM3" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = "eastus" #var.location
  resource_group_name = var.resource_group
  size                = "Standard_DS2_v2"
  admin_username      = var.admin_username
  admin_password      = var.admin_password
  disable_password_authentication = false
  network_interface_ids = [azurerm_network_interface.nic.id]
  #source_image_id = data.azurerm_image.packerImage.id
  
  admin_ssh_key {
    username   = "adminuser"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCyUh/zO72Lfvg7b2o2nP6djIqFlsm3aU2ZrCLHA28bKngYLDjPejpv3byUWDRsMAofdbFI2uGq7696G7nGnAkDozCOWoGjFPlGjbIdN0BHCdDTFeyMfuMErcyj9aGGqaKGkJWfjhDD7fFYv1Ne3wbo6atkNJTAVwnP0X65hfWGz+F3jlJ2iN5AsfvR/udu4hOJt+bJ7dP9GJeqEG6kkn8rM42WYAXS5MVdaT1o9SPvwgqeJY8HN8xbxDs7b2vHNVqQAkadsTn48xLFJ+0yP1co1lDGzEOofXCmChUq1eqwSwxgebMVINTGoW5bEvLDXY8AlPGIMeUstIfBxv0Gns2fzS/iy11ahkDLXTqvKJlQ8DtKPTDw/SsM4+U2PzfYgWen3HFpkMT9QgocpYuU7BMlJGqBpTjf2xsajs7oHZKmRJO+GfdosQhil3H3QRzzYi0rdqTmtplZQD+VlQSOm0ilTrp1C4uiDwau8zxBZdI5mJLsFjZPcyhODgaF9014yh0= bgroup\\aror030@AFSNOOSLNB00004"
    #public_key = "file("~/.ssh/terraform/environments/test/main/rsapublic")"
                        
  }
  os_disk {
    caching           = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
}
