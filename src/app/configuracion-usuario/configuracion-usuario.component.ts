import { Component, OnInit, OnDestroy } from '@angular/core';
import {Client} from '../sesion/client';
import {ClientService} from '../sesion/client.service';
import { Subject } from 'rxjs';


//import {ConfiguracionUsuarioService} from './configuracion-usuario.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-configuracion-usuario',
  templateUrl: './configuracion-usuario.component.html',
  styleUrls: ['./configuracion-usuario.component.css']
})
export class ConfiguracionUsuarioComponent implements OnInit, OnDestroy {

  clientes: Client []
  correoAdmin: string;
  administradores: Client []
  cliente: Client
  display = 'none'
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Client> = new Subject();

  constructor(private configuracion_clientService: ClientService,
    private router:Router, private appComponenet: AppComponent) {

    //inicialize clients list
    /*this.configuracion_clientService.getClients()
    .subscribe(clientes=>{
      this.administradores = clientes;
    })*/
  }


  ngOnInit() {
    this.appComponenet.setLogIn(1);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: { 
        "processing":     "Procesando...",
        "lengthMenu":     "Mostrar _MENU_ registros",
        "zeroRecords":    "No se encontraron resultados",
        "emptyTable":     "Ningún dato disponible en esta tabla",
        "info":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "infoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "infoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "infoPostFix":    "",
        "search":         "Buscar:",
        "url":            "",
        "loadingRecords": "Cargando...",
        "paginate": {
            "first":    "Primero",
            "last":     "Último",
            "next":     "Siguiente",
            "previous": "Anterior"
        },
        "aria": {
            "sortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sortDescending": ": Activar para ordenar la columna de manera descendente"
        }
      }
    };
    this.getClients();
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  getClients(){
    this.configuracion_clientService.getClients()
    .subscribe(clientes=>{
      this.administradores = clientes;
      this.dtTrigger.next();
    })
  }

  getUsuarios(){
    this.configuracion_clientService.getClients()
    .subscribe(clientes => this.clientes = clientes)
  }

  editAdmin(cliente){
    this.cliente = cliente
    this.router.navigate(['/editAdministrador', this.cliente.CORREO]);
  }

  eliminarAdmin(){
    this.configuracion_clientService.delete(this.correoAdmin);
    this.administradores = this.administradores.filter(o => o.CORREO !==this.correoAdmin);
  }

  //Model implementation
  openModalDialog(id){
  this.correoAdmin = id;
   this.display = 'block';
 }

  closeModalDialog(){
    this.display = 'none';
  }

}