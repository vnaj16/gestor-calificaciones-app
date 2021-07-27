import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CicloService } from '../services/ciclo.service';
import { CicloInfo } from '../models/cicloInfo.model';

@Component({
  selector: 'app-info-ciclo-home',
  templateUrl: './info-ciclo-home.component.html',
  styleUrls: ['./info-ciclo-home.component.css']
})
export class InfoCicloHomeComponent implements OnInit, OnChanges {
  @Input() idCicloSelected: any
  ciclo: CicloInfo = {
    idCiclo: 0,
    periodo: '2021-02',
    promedioFinal: 18.6,
    promedioBeca: 17.3,
    nCursos: 0   
  }

  constructor(public cicloService: CicloService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cicloService.getById(this.idCicloSelected)
    .subscribe(ciclo=>this.ciclo = ciclo)
    console.log('Input en info ciclo changed',changes)
  }

  ngOnInit(): void {

  }

  becaGreaterThanpromedioFinal(): boolean{
    return this.ciclo.promedioBeca > this.ciclo.promedioFinal
  }
}
