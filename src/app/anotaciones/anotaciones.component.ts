import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {AnotacionesService} from './anotaciones.service'
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import {Anotaciones} from './anotaciones'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.component.html',
  styleUrls: ['./anotaciones.component.css']
})
export class AnotacionesComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  idClient : String;
  anotaciones : Anotaciones[] = [];
  valid : boolean = false;
  display = 'none'
  anotacionLeer : Anotaciones;
  eliminarComentario : boolean = false
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Anotaciones> = new Subject();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private anotacionesService:AnotacionesService
  ) { }

  ngOnInit() {
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
    this.getAnotaciones();
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  marcarLeida(){
    for(var i = 0; i < this.anotaciones.length; i ++){
      if(this.anotaciones[i].ID_ANOTACION == this.anotacionLeer.ID_ANOTACION){
        this.anotaciones.splice(i, 1);
        break;
      }
    }
    this.anotacionesService.updateAnotacionLeer(this.anotacionLeer)
    .then(() => { 
      this.datatableElement.dtInstance.then( (dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next(); 
      }); 
    }).catch(err => console.log('Err Anotaciones: ' + err));
    this.closeModalDialog();
  }

  add(e)
  {
    e.preventDefault();
    var comentario = e.target.elements[0].value;
    if(comentario != "")
    {
      this.valid = true;
    }
    if(this.valid)
    {
      var anotacion = new Anotaciones()
      anotacion.ANOTACION = comentario;
      var id = + this.idClient;
      //anotacion.ID_CLIENTE = id
      this.createAnotacion(anotacion);
      this.getAnotaciones();
      e.target.elements[0].value = "";
    }
    
  }

  getAnotaciones()
  {
    this.anotacionesService.getAnotaciones().subscribe
    (anotaciones => {
      this.anotaciones = anotaciones,
      this.dtTrigger.next()
    }) 
  }

  createAnotacion(anotracion: Anotaciones)
  {
    this.anotacionesService.createAnotacion(anotracion)
    
  }
  
  //Model implementation
  openModalDialog(item:Anotaciones){
    this.anotacionLeer = item;
    this.display = 'block';
  }
 
   closeModalDialog(){
     this.display = 'none';
   }

  deleteComentario()
  {
    //this.anotacionesService.deleteAnotacion(this.anotacionEliminar.ID_ANOTACION);
    this.getAnotaciones();
  }
}
