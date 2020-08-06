import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {TipoProblema} from './tipo-problema'

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TipoProblemaService {

  constructor(
    private _http:Http
  ) { }

  getTipoProblema()
  {
    return this._http.get('/tipoProblema')
    .map(data => data.json());
  }
}
