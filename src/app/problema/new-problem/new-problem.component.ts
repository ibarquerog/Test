import { Component, OnInit } from '@angular/core';
import {TipoProblema} from '../../tipo-problema/tipo-problema'
import {TipoProblemaService} from '../../tipo-problema/tipo-problema.service'
import {ProblemaService} from '../problema.service'
import{ProblemaComponent} from '../problema.component'
import { Problema } from '../problema';
import {Router} from '@angular/router';
import { single } from 'rxjs/operators';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import {NewProblemService} from './new-problem.service'
import { AppComponent } from 'src/app/app.component';
import { LoginCredentials } from 'src/app/LoginCredentials';


@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {

  tipos : TipoProblema[] = []
  form: FormGroup
  problemas:Problema[] = []
  singleProblem = new Problema()
  problema : Problema[] = [] 
  problemaLatex : String
  solucionLatex : String
  verProblema : boolean = false;
  verSolucion : boolean = false;
  agregado: boolean = true
  exito: boolean = false
  minDate = "";


  formInit() {
    this.form = new FormGroup({
      //FORM CLIENTE
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      problema: new FormControl('', Validators.required),
      liberacion_problema: new FormControl('', Validators.required),
      solucion: new FormControl('', Validators.required),
      liberacion_solucion: new FormControl('', Validators.required)
    });
  }

  constructor(
    private router:Router,
    private appComponent: AppComponent,
    private _tipoProblemaService:TipoProblemaService,
    private _newProblemService : NewProblemService,
    private appComponenet: AppComponent
  ) { }

  ngOnInit() {
    if(LoginCredentials.tipoUsuario!="admin"){
      this.appComponent.setLogIn(0);
      this.router.navigate([""]);
    }
    
    this.formInit()
    this.getTiposProblema();
    this.singleProblem.LATEX_SOURCE_PROBLEMA = 'Problema: $\\sum_{i=1}^{3}x_{i}=x_{1}+x_{2}$';
    this.singleProblem.LATEX_SOURCE_SOLUCION = 'Solucion:  $\\sum_{i=1}^{3}x_{i}=x_{1}+x_{2}$';
    this.appComponenet.setLogIn(1);
  }

  getTiposProblema()
  {
    this._tipoProblemaService.getTipoProblema()
    .subscribe(x => this.tipos = x)
  }
  visualizarProblema(){
    this.verProblema = true;
    this.singleProblem.LATEX_SOURCE_PROBLEMA = this.form.value.problema
    this.problemaLatex = this.singleProblem.LATEX_SOURCE_PROBLEMA;
  }
  visualizarSolucion(){
    this.verSolucion = true;
    this.singleProblem.LATEX_SOURCE_SOLUCION = this.form.value.solucion
    console.log(this.singleProblem.LATEX_SOURCE_SOLUCION)
    this.solucionLatex = this.singleProblem.LATEX_SOURCE_SOLUCION;
  }

  setMinDate() {
    var date = this.form.value.liberacion_problema;
    var finalDate = this.form.value.liberacion_solucion;
    var dateI = new Date(date);
    var dateF = new Date(finalDate);

    if (dateI >= dateF || finalDate == "") {
      this.form.controls.liberacion_solucion.setValue(date)

    }
    this.minDate = date
  }

  add(e){
    e.preventDefault();
    var nombre = e.target.elements[0].value;
    var fechaLiberacionProblema = e.target.elements[4].value;
    var fechaLiberacionSolucion = e.target.elements[7].value;

    var valido = true;
    this.singleProblem.NOMBRE = nombre
    this.singleProblem.LATEX_SOURCE_PROBLEMA = this.form.value.problema
    this.singleProblem.LATEX_SOURCE_SOLUCION = this.form.value.solucion
    this.singleProblem.TIPO_PROBLEMA = this.form.value.categoria
    this.singleProblem.FECHA_LIBERACION_SOLUCION=fechaLiberacionSolucion;
    this.singleProblem.FECHA_LIBERACION_PROBLEMA=fechaLiberacionProblema;

    if(this.singleProblem.LATEX_SOURCE_PROBLEMA=="" || 
       this.singleProblem.LATEX_SOURCE_SOLUCION == "" ||
       this.singleProblem.TIPO_PROBLEMA == "" || 
       fechaLiberacionProblema == "" ||
       fechaLiberacionSolucion == ""
       )
    {
      this.agregado = false;
      return
    }
    if (new Date(fechaLiberacionProblema) > new Date(fechaLiberacionSolucion))
    {
      this.agregado = false;
      return;
    }

    for (var i = 0; i<this.problemas.length;i++) {
      var element = this.problemas[i];
      if (element.NOMBRE == nombre)
      {
        valido = false;
      }
    }

    if(valido)
    {
      var re = /\\/gi;
      this.singleProblem.LATEX_SOURCE_PROBLEMA = this.singleProblem.LATEX_SOURCE_PROBLEMA.toString().replace(re,"\\\\")
      this.singleProblem.LATEX_SOURCE_SOLUCION = this.singleProblem.LATEX_SOURCE_SOLUCION.toString().replace(re,"\\\\")
      
      
      this._newProblemService.createProblema(this.singleProblem);
      this.singleProblem = new Problema();

      this.exito = true;
      this.agregado = true;
      return;
    
    }
    else
    {
      console.log("Validacion 3")
      this.agregado = false;
      return;
    }
  }
}
