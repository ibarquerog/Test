import { Component, Input,OnInit,ViewChild } from '@angular/core';
import { Problema } from 'src/app/problema/problema';
import { UserService } from '../user.service';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import {AppComponent} from '../../app.component';
import { DatePipe } from '@angular/common'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [DatePipe]
})
export class CalendarioComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  isDtInitialized:boolean = false;
  fechaInicio: String;
  fechaFin: String;
  form: FormGroup
  problemas: Problema[] = [];
  @Input() problemasFiltered: Problema[] = [];
  filtro: any = { NOMBRE: null };
  minDate = "";
  initialDateValue = '';
  finalDateValue = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Problema> = new Subject();
  constructor(private _usersService : UserService,private datepipe:DatePipe) { }

  ngOnInit() {
    this.formInit();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
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
    this.getProblemsByDate();
    
  }
  formInit() {
    this.form = new FormGroup({
      initialDateValue: new FormControl('', Validators.required),
      finalDateValue: new FormControl('', Validators.required)
    });
  }

  getProblemsByDate() {
    this._usersService.getProblemsByDate()
    .subscribe(x => {this.problemas = x;
    });
  }

  filtrarProblemas() {
    this.problemasFiltered=[]
    var startDateFilter = new Date(this.form.value.initialDateValue)
    var endDateFilter = new Date(this.form.value.finalDateValue )

    for(var problema of this.problemas){
        console.log(problema.FECHA_LIBERACION_PROBLEMA)
        var problemDate=new Date(problema.FECHA_LIBERACION_PROBLEMA)
        if(problemDate>=startDateFilter && problemDate<=endDateFilter){
            this.problemasFiltered.push(problema)
            
        }
    }
    if (this.isDtInitialized) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
      });
  } else {
      this.isDtInitialized = true;
      this.dtTrigger.next();
  }
   
  }
  setMinDate() {
    var date = this.form.value.initialDateValue;
    var finalDate = this.form.value.finalDateValue;
    var dateI = new Date(date);
    var dateF = new Date(finalDate);

    if (dateI >= dateF || finalDate == "") {
      this.form.controls.finalDateValue.setValue(date)

    }
    this.minDate = date
  }

}
