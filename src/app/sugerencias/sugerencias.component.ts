
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sugerencia } from './sugerencia';
import {SugerenciasService} from '../sugerencias/sugerencias.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']

})
export class SugerenciasComponent implements OnInit, OnDestroy {
  sugerencias:Sugerencia[]=[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Sugerencia> = new Subject();
  private datatableElement: DataTableDirective;
  display='none';
  constructor(
    private sugerenciasService:SugerenciasService
  ) { } 

  ngOnInit() { 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
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
    this.getSugerencias();
  }

  getSugerencias(){
    console.log(this.sugerencias);
    this.sugerenciasService.getSugerencias().then(sugerencias=>{
      this.sugerencias=sugerencias;
      this.dtTrigger.next();

      console.log(sugerencias)})
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  marcarLeida(sugerencia:Sugerencia){
    for(var i = 0; i < this.sugerencias.length; i ++){
      if(this.sugerencias[i].ID_SUGERENCIA == sugerencia.ID_SUGERENCIA){
        this.sugerencias.splice(i, 1);
        break;
      }
    }
    this.sugerenciasService.updateSugerenciaLeida(sugerencia)
    .then(() => { 
      this.datatableElement.dtInstance.then( (dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next(); 
      }); 
    }).catch(err => console.log('Err Anotaciones: ' + err));
    this.closeModalDialog();
  }
  openModalDialog(){
    this.display = 'block';
  }
 
   closeModalDialog(){
     this.display = 'none';
   }
  
}
