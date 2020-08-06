import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Client} from './client'

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  /*Para crear datos se utiliza la peticion de http.POST
   *Para eliminar datos http.delete 
   *Para actualizar datos http.put
   *Para solicitar http.get
   */
  private _loggedInUser?: Client;

  constructor(
    private _http:Http
  ) { }


  logIn(username, password){
    return this._http.get('/logIn/' + username + '/' + password)
    .map(res => res.json());
  }

  getClients(){
    return this._http.get('/clients').map(res => res.json());
  }

  getClient(correo: String){ 
    return this._http.get('/client/' + correo)
      .map(res => res.json());
  }

  create(client : Client){
    return this._http.post('/clients',client)
      .map(data => data.json()).toPromise()
  }

  edit(client: Client){
    return this._http.put('/updateClients', client)
      .map(data => data.json()).toPromise()
  }

  delete(correo: string){
    console.log(correo);
    return this._http.delete('/clients/' + correo)
      .map(data => data.json()).toPromise()

  }

 
  //guardar Cuenta Actual
  get loggedInUser(): Client {
    return this._loggedInUser;
}
set loggedInUser(user: Client) {
    this._loggedInUser = user;
}
  
}
