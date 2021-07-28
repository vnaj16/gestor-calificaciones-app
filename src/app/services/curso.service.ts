import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../models/curso.model';
import { CursoInfo } from '../models/cursoInfo.model';
import { CreateCurso } from '../models/createCurso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseUrl = 'https://localhost:44345/api/';

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getAll(){
    return this.http.get<Curso[]>(this.baseUrl + 'cursos');
  }
  getById(idCurso: number){
    return this.http.get<CursoInfo>(this.baseUrl + 'cursos/'+idCurso);
  }
  create(curso: CreateCurso){
    return this.http
      .post<CreateCurso>(this.baseUrl + 'cursos', JSON.stringify(curso), this.httpHeader)
  }
}