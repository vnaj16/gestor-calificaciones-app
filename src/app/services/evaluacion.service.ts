import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evaluacion } from '../models/evaluacion.model';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { CreateEvaluacion } from '../models/createEvaluacion.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  private baseUrl = 'https://localhost:44345/api/';

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Evaluacion[]>(this.baseUrl + 'evaluaciones');
  }
  getById(idEvaluacion: number){
    return this.http.get<Evaluacion>(this.baseUrl + 'evaluaciones/'+idEvaluacion);
  }
  getByCurso(idCurso: number){
    return this.http.get<EvaluacionInfo[]>(this.baseUrl + 'evaluaciones/cursos/'+idCurso)
  }
  createCursoEvaluacion(evaluacion: CreateEvaluacion){
    return this.http
      .post<CreateEvaluacion>(this.baseUrl + 'evaluaciones/cursos/'+evaluacion.idCurso+'/', JSON.stringify(evaluacion), this.httpHeader)
  }

}