import { Component, OnInit } from '@angular/core';
import {ProblemaService} from '../problema/problema.service'
import {Problema} from '../problema/problema'
import {NavbarUserComponent} from '../navbar-user/navbar-user.component'
//Calendariomatematico123
import { ObraService } from '../obras/obras.service';
import { Obra } from '../obras/obra';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  obra: Obra;
  problemaActual : Problema;
  verProblema : boolean = false;
  verAnotaciones : boolean = true;
  problemaLatex:String="Enunciado del problema";
  solucionLatex:String="Solucion del problema";
  constructor(
    private obraService: ObraService,
    private problemaService: ProblemaService
  ) {}

  ngOnInit() { 
    setTimeout(() => { 
      this.getProblem();

    }, 500)
    this.getObra();
  }
  getObra(){
    this.obraService.getObraActual()
    .subscribe(obra => {
      this.obra = obra[0]
    });
  }

  getProblem(){ 
    this.problemaService.getProblemaActual().
    subscribe(x => {this.problemaActual = x[0]
      this.solucionLatex = this.problemaActual.LATEX_SOURCE_SOLUCION;
      this.problemaLatex=this.problemaActual.LATEX_SOURCE_PROBLEMA;
      console.log(x);
      });
  }
  getUrl() {
    return "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('" + this.obra.IMG_SOURCE + "')";
  }
}
