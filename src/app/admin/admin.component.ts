import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HostListener } from '@angular/core';
import { AppComponent } from '../app.component'
import { ObraService } from '../obras/obras.service';
import { Obra } from '../obras/obra';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  obras: Obra[]

  constructor(private router: Router,
    private appComponenet: AppComponent,
    private obraService: ObraService) {
  }

  ngOnInit() {
    console.log("init");
    this.cargarObras();
    this.appComponenet.setLogIn(1);
  }
   
  @HostListener('window:popstate', ['$event'])
  onPopState(event) { 
    this.appComponenet.setLogIn(3);
  }
  
  cargarObras(){
    console.log("cargarObras");
    this.obraService.getObrasYear().then(obras => {this.obras = obras,console.log(obras)});
    console.log(this.obras);
  }

}
