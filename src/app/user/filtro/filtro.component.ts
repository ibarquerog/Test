import { Component,Input, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Subject } from 'rxjs';
import {Problema} from '../../problema/problema'
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Input()problemas: Problema[] = [];
  filtro: any = { NOMBRE: null };
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Problema> = new Subject();

  constructor(private _usersService : UserService, private router:Router) { }

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

    this.getProblemsByDate();
  }

  getProblemsByDate() {
    this._usersService.getProblemsByDate()
    .subscribe(x =>{
      this.problemas = x;
      this.dtTrigger.next();
      console.log(this.problemas)
    })
  }
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  verProblema(problema:Problema){
    this.router.navigate(['/verProblemaUser'])
    localStorage.setItem('verProblema',problema.ID_PROBLEMA);
  }

}
