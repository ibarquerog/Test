import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import {Client} from '../../sesion/client'
import {ClientService} from '../../sesion/client.service'
import {ConfiguracionUsuarioComponent} from '../configuracion-usuario.component'
import { from, timer } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-administrador',
  templateUrl: './edit-administrador.component.html',
  styleUrls: ['./edit-administrador.component.css']
})
export class EditAdministradorComponent implements OnInit {
  cliente: Client = new Client
  repitedPassword: String = "";
  correo: string 
  samePassword: boolean = true
  agregado: boolean = true
  


  constructor(private editar_admin_clientService: ClientService,
     private route: ActivatedRoute, private router:Router, private appComponenet: AppComponent) {
    //obtener el usuario actual
    this.correo = this.route.snapshot.paramMap.get('id')
   }

   ngOnInit() {
    setTimeout(() => {
    this.editar_admin_clientService.getClient(this.correo)
    .subscribe(cliente =>{
      this.cliente = cliente[0]
      console.log(this.cliente);
      this.repitedPassword = this.cliente.PASSWORD    
      });
    });
    this.appComponenet.setLogIn(1);
}

  editarAdministrador(e){
    this.cliente.CORREO=this.correo;
    e.preventDefault();
    if (this.cliente.PASSWORD !== this.repitedPassword){
      this.samePassword = false
      return
    } else {
      this.samePassword = true
    }
    if (this.validarAdmin()){
      console.log("edit");
      this.editar_admin_clientService.edit(this.cliente)
      timer(500).subscribe(x=>{
        this.router.navigate(['config'])
      })
     
    } else {
      this.agregado = false
      return
    }
  }

  validarAdmin(){
    if(this.cliente.NOMBRE === "" ||
      this.cliente.CORREO === "" || 
      this.cliente.PASSWORD === "" )
      return false
    return true
  }

}
