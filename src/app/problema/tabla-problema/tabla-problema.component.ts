import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Problema} from '../problema'
import {ProblemaService} from '../problema.service'
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import { Anotaciones } from '../../anotaciones/anotaciones'
import { AnotacionesService } from '../../anotaciones/anotaciones.service';
import { AppComponent } from 'src/app/app.component';
import { LoginCredentials } from 'src/app/LoginCredentials';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-tabla-problema',
  templateUrl: './tabla-problema.component.html',
  styleUrls: ['./tabla-problema.component.css']
}) 
export class TablaProblemaComponent implements OnInit, OnDestroy {
  @Input() problems : Problema[];
  public problemaSeleccionado : Problema
  private datatableElement: DataTableDirective;
  display = 'none'
  IDproblemaEliminar : String;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Problema> = new Subject();
  constructor(
    private router:Router,
    private appComponent: AppComponent,
    private problemaService : ProblemaService,
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

    if(LoginCredentials.tipoUsuario!="admin"){
      this.appComponent.setLogIn(0);
      this.router.navigate([""]);
    }

    this.getProblemas();
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  verProblema(problema : Problema){
    this.problemaSeleccionado = problema
    localStorage.setItem("IDProblema",this.problemaSeleccionado.ID_PROBLEMA);
    this.router.navigate(['/verProblema',this.problemaSeleccionado.NOMBRE]);
    
  
  }
  eliminarProblema()
  {
    for(var i = 0; i < this.problems.length; i ++){
      if(this.problems[i].ID_PROBLEMA == this.IDproblemaEliminar){
        this.problems.splice(i, 1);
        break;
      }
    }
    this.problemaService.eliminarProblema(this.IDproblemaEliminar)
    .then(() => { 
      this.datatableElement.dtInstance.then( (dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      }); 
    }).catch(err => console.log('Err Anotaciones: ' + err));
    this.closeModalDialog();
      
  }
  getProblemas()
  {
    this.problemaService.getProblemas().subscribe(
      resultProblems => {
        this.problems = resultProblems;
        this.dtTrigger.next();
      });
  }

  openModalDialog(problemID:String){
    this.IDproblemaEliminar = problemID;
    this.display = 'block';
  }

  closeModalDialog(){
    this.display = 'none';
  }



}