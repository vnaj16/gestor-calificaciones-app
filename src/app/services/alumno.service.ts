import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend  } from '@angular/common/http';
import {AlumnoInfo} from '../models/alumnoInfo.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseUrl = 'http://localhost:44345/api/';

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getById(idAlumno: number){
    return this.http.get<AlumnoInfo>(this.baseUrl + 'alumno/'+idAlumno);
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
