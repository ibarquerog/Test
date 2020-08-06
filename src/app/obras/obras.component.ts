import { Component, OnInit } from '@angular/core';
import {Obra} from './obra';
import {ObraService} from './obras.service'
import {Router} from '@angular/router';
import { TipoColeccion } from './tipo-coleccion';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {

  obras: Obra[];
  obra: Obra;
  obrasEliminar: number;
  display = 'none';
  constructor(private obraService: ObraService,
    private router:Router, private appComponenet: AppComponent) { }

  ngOnInit() {
    this.cargarObras();
    this.appComponenet.setLogIn(1);
  }

  cargarObras(){
    this.obraService.getObras().then(obras => {
      this.obras=obras;
    console.log(this.obras)});
  }

  newObra(){
    this.router.navigate(['obras-new'])
  }

  editObra(obra){
    this.obra = obra
    this.router.navigate(['/obras-edit', this.obra.ID_OBRA_DE_ARTE]);
  }

  eliminarObra(){
    console.log("ID "+this.obrasEliminar)
    this.obraService.delete(this.obrasEliminar);
    location.reload();
  }

  //Model implementation
   //Model implementation
   openModalDialog(id){
    this.obrasEliminar = id;
   this.display = 'block';
 }

  closeModalDialog(){
    this.display = 'none';
  }
}