import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Client} from '../sesion/client';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionUsuarioService {
  /*Para crear datos se utiliza la peticion de http.POST
   *Para eliminar datos http.delete 
   *Para actualizar datos http.put
   *Para solicitar http.get
   */

  constructor(
    private _http:Http
    ) { }

    destroy(id : number){
      return this._http.delete('/clients/' + id)
      .map(data => data.json()).toPromise
    }

    /*
    update(id : number){
      return this._http.put('/clients/' + id)
      .map(data => data.json()).toPromise
    }
    */

    getUser(client: Client){
      return this._http.get('/clients/' + client.CORREO)
      .map(data => data.json()).toPromise
    }

    getUsers(){
      return this._http.get('/clients')
      .map(data => data.json()).toPromise()
    }
}


