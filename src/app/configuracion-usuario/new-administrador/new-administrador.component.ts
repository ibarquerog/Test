import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Client} from '../../sesion/client';
import {ClientService} from '../../sesion/client.service';
import {TipoCliente } from '../tipo-cliente';
import {SesionComponent} from '../../sesion/sesion.component'

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-new-administrador',
  templateUrl: './new-administrador.component.html',
  styleUrls: ['./new-administrador.component.css']
})
export class NewAdministradorComponent implements OnInit {
  cliente: Client = new Client
  clients: Client[];
  agregado: boolean = true
  samePassword: boolean = true 
  repitedPassword: string = ""
  display = "none";

  constructor(private agregar_admin_clientService: ClientService, 
    private router:Router, private appComponenet: AppComponent) {
    
  }

  ngOnInit() {
    this.getClients();
    this.appComponenet.setLogIn(1);
  }

  getClients() {
    this.agregar_admin_clientService.getClients().
      subscribe(clients => this.clients = clients);
  }
  agregarAdmin(e)
  {
    e.preventDefault();  
    if (this.cliente.PASSWORD !== this.repitedPassword){
      this.samePassword = false
      return
    } else {
      this.samePassword = true
    }
    if(this.validarAdmin()){
      this.cliente.ID_TIPO_CLIENTE = 1
      this.agregar_admin_clientService.create(this.cliente);
      this.router.navigate(['config'])
    }else{
      this.agregado = false;
      return
    } 

  }

  validarAdmin(){
    if(this.cliente.NOMBRE === "" ||
      this.cliente.CORREO === "" || 
      this.cliente.PASSWORD === "" )
      return false
    return true
  }

  validarUnico()  {
    for( var i=0; i< this.clients.length; i++){
      var element = this.clients[i];
      if(this.cliente.CORREO == element.CORREO){
        return false;
      }else{
        return true;
      }
    }
  }

  //Model implementation
  openModalDialog(){
    this.display = 'block';
  }

  closeModalDialog(){
    this.display = 'none';
  }

}
