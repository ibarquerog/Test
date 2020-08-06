import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import {Problema} from '../../problema/problema'
import {Obra} from '../../obras/obra'
import {ObraService} from '../../obras/obras.service'
import {ProblemaService} from '../../problema/problema.service'
import localeES from "@angular/common/locales/es";
import { AnotacionesService } from '../../anotaciones/anotaciones.service';
import 'rxjs/Rx'; 
import { formatDate } from '@angular/common';
import { Anotaciones } from 'src/app/anotaciones/anotaciones';
import { LoginCredentials } from 'src/app/LoginCredentials';
import { Comentario } from './comentario';
import { timer } from 'rxjs';
@Component({
  selector: 'app-ver-problema-user',
  templateUrl: './ver-problema-user.component.html',
  styleUrls: ['./ver-problema-user.component.css']
})
export class VerProblemaUserComponent implements OnInit {

  @Input() nombreProblema: string = "";
  obra : Obra;
  comentarios:Comentario[];
  comentario:Comentario=new Comentario;
  anotacion:Anotaciones=new Anotaciones;
  displayAnotacion='none'
  tipoProblemaString : String = ""
  problemLatex : String = ""
  solutionLatex : String = "\\text{Solución no disponible aún}"
  
  problemLatexVer : String = ""
  solutionLatexVer : String = "Solución no disponible aún"

  ver : boolean = false;

  public problema = new Problema();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private problemaService: ProblemaService,
    private anotacionService:AnotacionesService,
    private obraService : ObraService) {
  }

  ngOnInit() {
    setTimeout(() => { 
      this.getProblem(); 
    })

    timer(1000).subscribe(x=>{
      this.getComentariosProblema();
    })
  }

  getProblem(){ 
    this.problemaService.getProblemaById(localStorage.getItem("verProblema")).
    then(x => {this.problema = x[0];
      this.problemLatexVer=this.problema.LATEX_SOURCE_PROBLEMA;
      this.solutionLatexVer=this.problema.LATEX_SOURCE_SOLUCION;
      this.getObra();

      let date=new Date();
      console.log(date.getDate());
  
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();


      if(new Date(this.problema.FECHA_LIBERACION_SOLUCION)>new Date(yyyy+"-"+mm+"-"+dd)){
        this.solutionLatexVer="No se ha liberado la solución de este problema"
        console.log(this.solutionLatexVer);
      }
      });
  }

  getComentariosProblema(){
    this.problemaService.getComentariosProblema(localStorage.getItem("verProblema")).
    then(x => {this.comentarios = x;
      console.log(this.comentarios);
      });
  }


  getObra(){
    this.obraService.getObraActual()
    .subscribe(obra => {
      this.obra = obra[0]
      console.log(this.obra)
    });
  }

  enviarComentario(){
    this.comentario.CLIENTE=LoginCredentials.usuario;
    this.comentario.ID_PROBLEMA=this.problema.ID_PROBLEMA;
    this.problemaService.createComentarioProblema(this.comentario)
    this.comentarios.push(new Comentario("",this.comentario.COMENTARIO,this.comentario.CLIENTE));
  }

  openModalDialogAnotacion(){
    this.displayAnotacion='block';
    
  }
  closeModalDialogAnotacion(){
    this.displayAnotacion='none'; 
  }
  guardarAnotacion(idproblema:string){
    this.anotacion.ID_CLIENTE=LoginCredentials.usuario;
    this.anotacion.ID_PROBLEMA=idproblema;
    this.displayAnotacion='none';
    console.log(this.anotacion)
    this.anotacionService.createAnotacion(this.anotacion);
  }

}
