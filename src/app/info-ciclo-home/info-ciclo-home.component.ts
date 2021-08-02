import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CicloService } from '../services/ciclo.service';
import { CicloInfo } from '../models/cicloInfo.model';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-info-ciclo-home',
  templateUrl: './info-ciclo-home.component.html',
  styleUrls: ['./info-ciclo-home.component.css']
})
export class InfoCicloHomeComponent implements OnInit, OnChanges {
  @Input() idCicloSelected: any
  @Input() mode: any
  ciclo: CicloInfo = {
    idCiclo: 0,
    periodo: '',
    promedioFinal: 0,
    promedioBeca: 0,
    nCursos: 0,
    nCursosRegistrados: 0,
    promedioFinalCicloAnterior: 0,
    periodoAnterior: '' 
  }
  promedioAcumulado: number = 0

  constructor(public cicloService: CicloService, public alumnoService: AlumnoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cicloService.getById(this.idCicloSelected)
    .subscribe(ciclo=>this.ciclo = ciclo)
    console.log('Input en info ciclo changed',changes)
  }

  ngOnInit(): void {
    this.alumnoService.getById(1)
      .subscribe(alumno=>this.promedioAcumulado = alumno.promedioAcumulado)
  }

  becaGreaterThanpromedioFinal(): boolean{
    return this.ciclo.promedioBeca > this.ciclo.promedioFinal
  }
}
