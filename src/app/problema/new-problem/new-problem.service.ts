import { Injectable } from '@angular/core';
import {Http,  Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Problema } from '../problema';

@Injectable({
  providedIn: 'root'
})
export class NewProblemService {

  constructor(
    private _http:Http
  ) { }

  createProblema(singleProblem : Problema)
  {
    return this._http.post('/problem',singleProblem)
    .map(data => data.json()).toPromise()
  }

  getSingleProblems()
  {
    return this._http.get('/singleProblem')
    .map(data => data.json()).toPromise()
  }

  getProblem(idProblema : String)
  {
    return this._http.get('/getProblema/'+idProblema)
    .map(data => data.json()).toPromise();
  }

  updateProblem(singleProblem : Problema)
  {
    return this._http.put('/singleProblem/',singleProblem)
    .map(data => data.json()).toPromise();
  }

 
}
