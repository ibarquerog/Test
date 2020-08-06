import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Route, Router } from '@angular/router';
import {ClientService} from '../sesion/client.service'
import { Client } from '../sesion/client';
import { LoginCredentials } from '../LoginCredentials';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private appComponent: AppComponent, private usuario_actual_clientService: ClientService,  private router: Router) { }
  display = 'none'
  usuario =""
  navbar : boolean = true;

  ngOnInit() {
  }

  logOut(){
    this.appComponent.setLogIn(0)
    this.router.navigate(["/login"])
    LoginCredentials.logOut();
  }
  decollapse()
  {
    this.navbar = false;
  }
  collapse()
  {
    this.navbar = true;
  }
}
