import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class TipoColeccionService {

  constructor(
    private _http:Http
  ) { }

  getTipos(){
    return this._http.get('/opcionesObras')
    .map(data => data.json()).toPromise();
  }

  getTiposColeccion(){
    return this._http.get('/tipoColeccion')
    .map(data => data.json()).toPromise()
  }

  addTipoColeccion(coleccion){
    return this._http.post('/tipoColeccion', coleccion)
      .map(data => data.json()).toPromise()
  }

  getTiposTecnicas(){
    return this._http.get('/tipoTecnica')
    .map(data => data.json()).toPromise()
  }

  addTipoTecnica(tecnica){
    return this._http.post('/tipoTecnica', tecnica)
      .map(data => data.json()).toPromise()
  }

  getTipoColeccion(id){
    return this._http.get('/tipoColeccion/' + id)
    .map(res => res.json());
  }

  getTipoTecnica(id){
    return this._http.get('/tipoTecnica/' + id)
    .map(res => res.json());
  }

}
