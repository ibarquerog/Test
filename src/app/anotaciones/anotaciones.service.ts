import { Client } from './../sesion/client';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Anotaciones } from './anotaciones'

@Injectable({
  providedIn: 'root'
})
export class AnotacionesService {

  constructor(
    private _http:Http
  ) { }

  getAnotaciones(){
    return this._http.get('/getAnotaciones')
    .map(anotaciones => anotaciones.json())
  }

  updateAnotacionLeer(anotacion: Anotaciones){
    console.log('Anotacion: ' + anotacion.ID_ANOTACION);
    return this._http.put('/updateAnotacionLeida', anotacion)
    .map(data => data.json()).toPromise()
  }

  getAnotacionByUser(idClient:String)
  {
    return this._http.get('/anotaciones/'+idClient)
    .map(data => data.json())
  }

  createAnotacion(anotacion:Anotaciones)
  {
    return this._http.post('/createAnotacion',anotacion)
    .map(data => data.json()).toPromise();
  }
  deleteAnotacion(id:number)
  {
    return this._http.delete('/anotaciones/'+id)
    .map(data => data.json()).toPromise()
  }
}
