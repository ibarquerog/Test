import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Sugerencia } from './sugerencia';

@Injectable({
  providedIn: 'root'
})
export class SugerenciasService {

  constructor(
    private _http:Http,
  ) { }

  getSugerencias() {
    return this._http.get('/getSugerencias')
      .map(data => data.json()).toPromise()
  }
  createSugerencia(sugerencia:Sugerencia){
    return this._http.post('/createSugerencia',sugerencia)
    .map(data => data.json()).toPromise()
  }
  updateSugerenciaLeida(sugerencia:Sugerencia){
    console.log(sugerencia);
    return this._http.put('/updateSugerenciaLeida',sugerencia)
    .map(data => data.json()).toPromise()
  }
}
