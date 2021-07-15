import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciclo } from '../models/ciclo.model';

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  private baseUrl = 'https://localhost:44345/api/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Ciclo[]>(this.baseUrl + 'ciclos');
  }
}
