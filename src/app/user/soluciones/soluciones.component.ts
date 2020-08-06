import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Problema} from '../../problema/problema'

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.css']
})
export class SolucionesComponent implements OnInit {

  problemas: Problema[] = [];
  user : String;

  constructor(private _usersService : UserService) { }

  ngOnInit() {
    this.getProblemsByDate()
  }

  getProblemsByDate() {
    this._usersService.getProblemsByDate()
    .subscribe(x => this.problemas = x)
  }

}