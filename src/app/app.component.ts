import { Component } from '@angular/core';
import { Anotaciones } from './anotaciones/anotaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isViewable: boolean;
  title = 'calendario-app';
  adminLogged = false;
  userLogged =  false;
  inicio = true;
  constructor(){
    this.inicio = true
  };

  public setLogIn(numeroNavBar: number){
    if (numeroNavBar == 1){
      this.adminLogged = true
      this.userLogged = false
      this.inicio = false
    } else if (numeroNavBar == 2){
      this.userLogged = true
      this.adminLogged = false
      this.inicio = false
    } else {
      this.userLogged = false
      this.adminLogged = false
      this.inicio = true
    }
  }

}

