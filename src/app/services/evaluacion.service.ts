import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evaluacion } from '../models/evaluacion.model';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  private baseUrl = 'https://localhost:44345/api/';

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
}