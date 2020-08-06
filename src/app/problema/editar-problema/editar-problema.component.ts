import { Component, OnInit, Input } from '@angular/core';
import {NewProblemService} from '../new-problem/new-problem.service'
import {TipoProblemaService} from '../../tipo-problema/tipo-problema.service'
import {Problema} from '../problema'
import {Router} from '@angular/router';
import {TipoProblema} from '../../tipo-problema/tipo-problema'
import { AppComponent } from 'src/app/app.component';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { LoginCredentials } from 'src/app/LoginCredentials';
import { timer } from 'rxjs';

@Component({
  selector: 'app-editar-problema',
  templateUrl: './editar-problema.component.html',
  styleUrls: ['./editar-problema.component.css']
})
export class EditarProblemaComponent implements OnInit {
  @Input() problema : Problema
  editProblema = new Problema()
  tipos : TipoProblema[] = []
  agregado: boolean = true
  problemaLatex : String
  solucionLatex : String
  form: FormGroup
  minDate = "";

  constructor(
    private router:Router,
    private appComponent: AppComponent,
    private _newProblemService : NewProblemService,
    private _tipoProblemaService : TipoProblemaService,
    private appComponenet: AppComponent
  ) {
   }

   formInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      problema: new FormControl('', Validators.required),
      liberacion_problema: new FormControl('', Validators.required),
      solucion: new FormControl('', Validators.required),
      liberacion_solucion: new FormControl('', Validators.required)
    })
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
  ngOnInit() {
    if(LoginCredentials.tipoUsuario!="admin"){
      this.appComponent.setLogIn(0);
      this.router.navigate([""]);
    }



    this.formInit()
    setTimeout(() => {
      this.clone()
      this.getTiposProblema();
    });
    this.appComponenet.setLogIn(1);
  }
  clone()
  {
    Object.assign(this.editProblema,this.problema);
    this.form.controls.nombre.setValue(this.editProblema.NOMBRE)
    this.form.controls.categoria.setValue(this.editProblema.TIPO_PROBLEMA)
    this.form.controls.problema.setValue(this.editProblema.LATEX_SOURCE_PROBLEMA)
    this.form.controls.solucion.setValue(this.editProblema.LATEX_SOURCE_SOLUCION)
    this.form.controls.liberacion_problema.setValue(this.editProblema.FECHA_LIBERACION_PROBLEMA)
    this.form.controls.liberacion_solucion.setValue(this.editProblema.FECHA_LIBERACION_SOLUCION)

  }
  
  update()
  {
    this.editProblema.NOMBRE = this.form.value.nombre
    this.editProblema.LATEX_SOURCE_PROBLEMA = this.form.value.problema
    this.editProblema.LATEX_SOURCE_SOLUCION = this.form.value.solucion
    this.editProblema.TIPO_PROBLEMA = this.form.value.categoria
    console.log(this.editProblema);

    this.agregado = true;
    if(this.editProblema.NOMBRE  == ""||
      this.editProblema.TIPO_PROBLEMA  == ""|| 
      this.editProblema.LATEX_SOURCE_PROBLEMA  == ""||
      this.editProblema.LATEX_SOURCE_SOLUCION  == "")
      {
        this.agregado = false;
      }
    if(this.agregado)
    { 
      //var re = /\\/gi;
      //this.editProblema.LATEX_SOURCE_PROBLEMA = this.editProblema.LATEX_SOURCE_PROBLEMA.toString().replace(re,"\\\\")
      //this.editProblema.LATEX_SOURCE_SOLUCION = this.editProblema.LATEX_SOURCE_SOLUCION.toString().replace(re,"\\\\")

      this.editProblema.FECHA_LIBERACION_PROBLEMA=this.form.controls.liberacion_problema.value;
      this.editProblema.FECHA_LIBERACION_SOLUCION=this.form.controls.liberacion_solucion.value;
      console.log(this.editProblema)
      this._newProblemService.updateProblem(this.editProblema).
      then(
      )
      .catch(err => console.log(err));
      
     }
     
    timer(500).subscribe(x=>{
      this.router.navigate(["problem"]);
    })
    
  }
  getTiposProblema()
  {
    this._tipoProblemaService.getTipoProblema()
    .subscribe(x => this.tipos = x)
    console
  }


  visualizarProblema(){
    this.editProblema.LATEX_SOURCE_PROBLEMA = this.form.value.problema
    this.problemaLatex = this.editProblema.LATEX_SOURCE_PROBLEMA;
  }
  visualizarSolucion(){
    this.editProblema.LATEX_SOURCE_SOLUCION = this.form.value.solucion
    this.solucionLatex = this.editProblema.LATEX_SOURCE_SOLUCION;
  }
}