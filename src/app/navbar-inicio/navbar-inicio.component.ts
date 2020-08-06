import { Component, OnInit } from '@angular/core';
import {Client} from '../sesion/client';
import {ClientService} from '../sesion/client.service'
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { LoginCredentials } from '../LoginCredentials';


@Component({
  selector: 'app-navbar-inicio',
  templateUrl: './navbar-inicio.component.html',
  styleUrls: ['./navbar-inicio.component.css']
})
export class NavbarInicioComponent implements OnInit {
  navbar : boolean = true;
  display="none";
  logInResult: number = 0;
  invalid: boolean = false
  user: Client 


  constructor(    private _clientService : ClientService,
    private appComponent: AppComponent,
    private router:Router) {
    
   }

  ngOnInit() { 
  }
  decollapse()
  {
    this.navbar = false;
  }
  collapse()
  {
    this.navbar = true;
  }
  login(){
    this.display="block";
  }
  loginUser(e)
  {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var pass = e.target.elements[1].value;
    console.log(username);
    console.log(pass);
    if (username === "" || pass === ""){
      this.invalid = true
      return
    }
   
    this._clientService.logIn(username, pass).subscribe(resultado => {
      this.logInResult = resultado;
      console.log("LogInResult in logIn: " + this.logInResult);

      if(this.logInResult > 0 ){
        if(this.logInResult == 1){
          this.router.navigate(['admin'])
          this.appComponent.setLogIn(1);
          localStorage.setItem('UsuarioActivo', username);
          localStorage.setItem('TipoUsuario', 'admin');
          LoginCredentials.usuario=username;
          LoginCredentials.tipoUsuario="admin";
        }else{
          this.router.navigate(['user'])
          this.appComponent.setLogIn(2);
          localStorage.setItem('UsuarioActivo', username);
          localStorage.setItem('TipoUsuario', 'user');
          LoginCredentials.usuario=username;
          LoginCredentials.tipoUsuario="admin";
        }
      }
      this.invalid = true;
    });
    
    console.log("LogInResult: " + this.logInResult);
    return 
  }


}
