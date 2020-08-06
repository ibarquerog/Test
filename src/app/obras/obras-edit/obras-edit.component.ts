import { Component, OnInit } from '@angular/core';
import { TipoColeccion } from '../tipo-coleccion';
import { TipoTecnica } from '../tipo-tecnica';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { ObraService } from '../obras.service';
import { TipoColeccionService } from '../obras-new/tipo-coleccion.service';
import { Obra } from '../obra';
import { AppComponent } from 'src/app/app.component';
import { timer } from 'rxjs';
import { LoginCredentials } from 'src/app/LoginCredentials';



@Component({
  selector: 'app-obras-edit',
  templateUrl: './obras-edit.component.html',
  styleUrls: ['./obras-edit.component.css']
})
export class ObrasEditComponent implements OnInit {

  obra: Obra;
  idObra: String;
  tiposColecciones: TipoColeccion[]
  tiposTecnicas: TipoTecnica[]
  tipoColeccion: TipoColeccion
  tipoTecnica: TipoTecnica
  imageFile: File
  editada: boolean = false
  error: boolean = false  

  constructor(
    private appComponent: AppComponent,
    private route: ActivatedRoute, 
    private obraService: ObraService,
    private tipoColeccionService: TipoColeccionService,
    private router: Router, private appComponenet: AppComponent) {
    this.idObra = this.route.snapshot.paramMap.get('id')
    this.getObra();

  }

  ngOnInit() {
    if(LoginCredentials.tipoUsuario!="admin"){
      this.appComponent.setLogIn(0);
      this.router.navigate([""]);
    }
    this.appComponenet.setLogIn(1);
  }
  getObra(){
    this.obraService.getObra(this.idObra)
      .subscribe(obra => {
        this.obra = obra[0]
        console.log(obra[0]);
        this.cargarTipos();
      });
  }

  
  cargarTipos(){
     this.tipoColeccionService.getTipos().then(tipos => {
        this.tiposColecciones = tipos[0];
        this.tiposTecnicas = tipos[1];
        console.log(this.tiposColecciones);
        console.log(this.tiposTecnicas);
      });

  }

  changeImage(event) {
    this.imageFile = <File>event.target.files[0]
  }

  editar(e) {
    console.log(this.obra);
    if (this.validarObra()){
      this.obraService.edit(this.obra)
      timer(500).subscribe(x=>{
        this.router.navigate(['obras'])
      })
    } else {
      this.error = true
      this.editada = false
      return
    }
  }

  validarObra(){
    if (this.obra.NOMBRE_ARTISTA === "" || this.obra.NOMBRE_DE_OBRA === "" || 
        this.obra.LARGO === null || this.obra.ANCHO === null || this.obra.YEAR === null || 
        this.obra.TIPO_COLECCION === "" || this.obra.TIPO_DE_TECNICA === "")
        return false
    return true
  }
}
