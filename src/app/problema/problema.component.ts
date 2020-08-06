import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';
import {Problema} from './problema'
import {ProblemaService} from './problema.service'
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.css']
})
export class ProblemaComponent implements OnInit {


  title: string = 'ng-katex';
  url: string = 'https://github.com/garciparedes/ng-katex';
  equation: string = 'Some plain text: $//sum_{i=1}^nx_i$';
  options: KatexOptions = {
    displayMode: false
  };
  public problemas : Problema[] = []
  constructor(
    private _problemaService : ProblemaService, private appComponenet: AppComponent
  ) { }
  
  ngOnInit(){
    //this.getProblemas();
    this.appComponenet.setLogIn(1);
  }

  /*getProblemas()
  {
    console.log("getProblemas");
    this._problemaService.getProblemas()
    .then(x => this.problemas = x);
  }*/

}
