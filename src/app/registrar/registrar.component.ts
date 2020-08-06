import { Component, OnInit } from '@angular/core';
import { Client } from '../sesion/client'
import { ClientService } from '../sesion/client.service'
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  client: Client = new Client;
  clients: Client[];
  repeatedPassword: string = ""
  valid: boolean = true
  iguales: boolean = true
  correoValid: boolean = true

  constructor(
    private _clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getClients();
    appComponent: AppComponent

  }

  getClients() {
    this._clientService.getClients().
      subscribe(clients => this.clients = clients);
  }

  registrar(e) {
    e.preventDefault();
    if (this.validarClient()) {
      this.correoValid = eval("/^[a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/").test(this.client.CORREO)
      if (!this.correoValid) {
        return
      }
      if (this.client.PASSWORD !== this.repeatedPassword) {
        this.iguales = false
        return
      } else {
        this.iguales = true
        var correoValido = true;
        for (var i = 0; i < this.clients.length; i++) {
          var element = this.clients[i];
          if (this.client.CORREO == element.CORREO) {
            correoValido = false;
            this.valid = false;
            break;
          }
        } if (correoValido) {
          this.client.ID_TIPO_CLIENTE = 2
          this._clientService.create(this.client)
          this.router.navigate(['login'])
        }
      }
    } else {
      this.valid = false
    }
  }

  validarClient() {
    if (this.client.NOMBRE === "" || this.client.PASSWORD === "" ||
      this.client.CORREO === "") {
      return false
    } return true
  }

}
