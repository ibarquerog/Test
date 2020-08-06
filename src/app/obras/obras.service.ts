import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { timer } from 'rxjs';

import { Obra } from './obra'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  /*Para crear datos se utiliza la peticion de http.POST
   *Para eliminar datos http.delete 
   *Para actualizar datos http.put
   *Para solicitar http.get
   */
  constructor(
    private _http: Http
  ) { }

  getObras() {
     return this._http.get('/obras')
    .map(data => data.json()).toPromise()
  }
   
  

  getObra(id: String) {
    return this._http.get('/obras/' + id)
      .map(res => res.json());
  }

  getObrasDate(id: String) {

    return this._http.get('/obrasDatee/'+ id)
      .map(data => data.json()).toPromise()
  }

  create(obra: Obra) {
       return this._http.post('/obras', obra)
    .map(data => data.json()).toPromise()
  

  }

  edit(obra: Obra) {
    return this._http.put('/obras', obra)
      .map(data => data.json()).toPromise()
  }

  delete(id: number) {
    return this._http.delete('/obras/' + id)
      .map(data => data.json()).toPromise()
  }

  uploadImage(image: File) {
    const formData = new FormData()
    formData.append("image", image, image.name)
    return this._http.post('/upload', formData)
  }

  getObrasYear(){
    return this._http.get('/obras')
      .map(data => data.json()).toPromise()
  }

  getObraActual() {
    return this._http.get('/obraActual')
      .map(res => res.json());
  }

}
