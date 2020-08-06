import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service'
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { LoginCredentials } from '../LoginCredentials';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  logInResult: number = 0;
  correoString = new String
  passString = new String
  invalid: boolean = false
  user: Client 
 

  constructor(
    private _clientService : ClientService,
    private appComponent: AppComponent,
    private router:Router
  ) {
    this.appComponent.setLogIn(0);
   }

  ngOnInit() {
    this.appComponent.setLogIn(0);
    LoginCredentials.logOut();
   }

  loginUser(e)
  {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var pass = e.target.elements[1].value;
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

  login() {
    this._clientService.loggedInUser= this.user;
  }
  
}
