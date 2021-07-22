import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseUrl = 'https://localhost:44345/api/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Curso[]>(this.baseUrl + 'cursos');
  }
  getById(idCurso: number){
    return this.http.get<Curso>(this.baseUrl + 'cursos/'+idCurso);
  }
}