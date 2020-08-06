import { Component, OnInit } from '@angular/core';
import { Sugerencia } from 'src/app/sugerencias/sugerencia';
import {SugerenciasService } from '../../sugerencias/sugerencias.service'

@Component({
  selector: 'app-enviar-sugerencia',
  templateUrl: './enviar-sugerencia.component.html',
  styleUrls: ['./enviar-sugerencia.component.css']
})
export class EnviarSugerenciaComponent implements OnInit {
  sugerencia:Sugerencia;
  constructor( private sugerenciaService:SugerenciasService) { }

  ngOnInit() {
    this.sugerencia=new Sugerencia
  }

  enviarSugerencia(e){
    this.sugerencia.CORREO=localStorage.getItem("UsuarioActivo");
    console.log(this.sugerencia);
    this.sugerenciaService.createSugerencia(this.sugerencia);
  }

}
