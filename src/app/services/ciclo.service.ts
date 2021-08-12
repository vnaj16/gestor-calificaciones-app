import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend  } from '@angular/common/http';
import { Ciclo } from '../models/ciclo.model';
import {CicloInfo} from '../models/cicloInfo.model';
import {CreateCiclo} from '../models/createCiclo.model';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  private baseUrl = 'http://localhost:44345/api/';

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getAll(){
    return this.http.get<Ciclo[]>(this.baseUrl + 'ciclos');
  }
  getById(idCiclo: number){
    return this.http.get<CicloInfo>(this.baseUrl + 'ciclos/'+idCiclo);
  }
  getCursosByCiclo(idCiclo: number){
    return this.http.get<Curso[]>(this.baseUrl + 'ciclos/'+idCiclo+'/cursos')
  }
  create(ciclo: CreateCiclo){
    return this.http
      .post<CreateCiclo>(this.baseUrl + 'ciclos', JSON.stringify(ciclo), this.httpHeader)
  } //https://www.remotestack.io/angular-httpclient-service-example-tutorial/
  update(idCiclo: number, ciclo: CicloInfo){
    return this.http
      .put<CicloInfo>(this.baseUrl+ 'ciclos/'+idCiclo, JSON.stringify(ciclo), this.httpHeader)
  }


  httpError(error: any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return msg;
  }
}
