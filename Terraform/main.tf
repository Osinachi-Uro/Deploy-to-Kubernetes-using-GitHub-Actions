variable "do_token" {}

terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~>2.0"
    }
  }
}


provider "digitalocean" {
  token = "${var.do_token}"
}


resource "digitalocean_kubernetes_cluster" "actions" {
  name    = "actions"
  region  = "lon1"
  version = "1.25.12-do.0"
  ha = true

  node_pool {
    name       = "node"
    size       = "s-2vcpu-4gb"
    auto_scale = true
    min_nodes  = 2
    max_nodes  = 3
  }
}
