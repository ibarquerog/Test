import { Injectable } from '@angular/core';
import {Problema} from './problema'
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Anotaciones } from 'src/app/anotaciones/anotaciones'
import { Comentario } from '../user/ver-problema-user/comentario';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  constructor(
    private _http:Http
  ) { }

  getProblemas(){
    console.log("llamada al api");
    return this._http.get('/singleProblem')
    .map(data => data.json())
  }
  getProblemaActual(){
    return this._http.get('/problemaActual')
    .map(data => data.json())
  }

  eliminarProblema(nombre : String)
  {
    return this._http.delete('/problemas/'+nombre)
    .map(data => data.json()).toPromise()
  }

  getProblema(nombre : String)
  {
    return this._http.get('/problemaConFechas/'+nombre)
    .map(data => data.json()).toPromise()
  }

  getProblemaById(idProblema : String)
  {
    return this._http.get('/getProblema/'+idProblema)
    .map(data => data.json()).toPromise()
  }

  createComentarioProblema(comentario:Comentario)
  {
    return this._http.post('/crearComentario',comentario)
    .map(data => data.json()).toPromise()
  }

  getComentariosProblema(idProblema:string){
    return this._http.get('/getComentariosProblema/'+idProblema)
    .map(data => data.json()).toPromise()
  }
  


}
