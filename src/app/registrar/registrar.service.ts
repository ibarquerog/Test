import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(
    private _http:Http
   ) { }

   getClient()
   {
     return this._http.get('/client')
    .map(data => data.json()).toPromise()
   }
}
