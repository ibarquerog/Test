import { OpcionesObras } from './opcionesObras'
import { Component, OnInit } from '@angular/core';
import { TipoColeccionService } from './tipo-coleccion.service';
import { TipoColeccion } from '../tipo-coleccion';
import { TipoTecnica } from '../tipo-tecnica';
import { Obra } from '../obra';
import { Router } from '@angular/router';
import { ObraService } from '../obras.service';
import { AppComponent } from 'src/app/app.component'; 
import { DomSanitizer } from '@angular/platform-browser';
import { timer } from 'rxjs';
import { LoginCredentials } from 'src/app/LoginCredentials';
@Component({
  selector: 'app-obras-new',
  templateUrl: './obras-new.component.html',
  styleUrls: ['./obras-new.component.css']
})
export class ObrasNewComponent implements OnInit {

  obra: Obra = new Obra
  opcionesObras: OpcionesObras = new OpcionesObras
  tipoColeccion: TipoColeccion
  tipoTecnica: TipoTecnica
  imageFile: File = null
  coleccion: TipoColeccion = new TipoColeccion
  tecnica: TipoTecnica = new TipoTecnica
  imagepath: any;

  constructor(
    private appComponent: AppComponent,
    private tipoColeccionService: TipoColeccionService,
    private sanitizer:DomSanitizer,
    private obraService: ObraService,
    private router:Router, private appComponenet: AppComponent) {
      this.cargarTipos(); 
    }

  ngOnInit() {
    if(LoginCredentials.tipoUsuario!="admin"){
      this.appComponent.setLogIn(0);
      this.router.navigate([""]);
      return;
    }

    this.cargarTipos();
    this.appComponenet.setLogIn(1);
  }

  cargarTipos(){
    this.tipoColeccionService.getTipos().then(tipos => {
      this.tipoColeccion = tipos[0];
      this.tipoTecnica = tipos[1];
      console.log(tipos);
      console.log(this.tipoColeccion);
      console.log(this.tipoTecnica);
    });
  }

  cambioTipoColeccion(nuevoTipo){
    this.tipoColeccion = nuevoTipo
  }


  changeImage(event) {
    let file=event.target.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.imagepath = reader.result;
    }
    reader.onerror=function(error){
      console.log("Error: "+ error); 
    }
    
  }

  agregar(e){
    console.log(this.obra);
    this.obra.IMG_SOURCE=this.imagepath;
    e.preventDefault();
    this.obraService.create(this.obra);

    timer(500).subscribe(x=>{
      this.router.navigate(['obras']);
    })
    
  }

  agregarColeccion(e){
    if (this.coleccion.DESCRIPCION === ""){
      return 
    }
    this.tipoColeccionService.addTipoColeccion(this.coleccion)
    this.cargarTipos()
    this.coleccion.DESCRIPCION = ""
  }

  agregarTecnica(e){
    if (this.tecnica.DESCRIPCION === ""){
      return 
    }
    this.tipoColeccionService.addTipoTecnica(this.tecnica)
    this.cargarTipos()
    this.tecnica.DESCRIPCION = ""
  }

  validarObra(){
    if (this.obra.NOMBRE_ARTISTA === "" || this.obra.NOMBRE_DE_OBRA === "" || 
        this.obra.IMG_SOURCE === "" || this.obra.LARGO === 0 || this.obra.ANCHO === 0 ||
        this.obra.YEAR === 0 || this.obra.TIPO_COLECCION === "" || this.obra.TIPO_DE_TECNICA === "" ||
        this.obra.TIPO_COLECCION === "" || this.obra.TIPO_DE_TECNICA ==="")
        return false
    if (new Date(this.obra.FECHA_INICIO) > new Date(this.obra.FECHA_FIN))
      return false
    return true
  }

}
