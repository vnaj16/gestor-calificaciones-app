import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { CursoInfo } from '../models/cursoInfo.model';

@Component({
  selector: 'app-info-curso-home',
  templateUrl: './info-curso-home.component.html',
  styleUrls: ['./info-curso-home.component.css']
})
export class InfoCursoHomeComponent implements OnInit {
  @Input() idCursoSelected: any
  @Input() mode: any
  curso: CursoInfo = {
    idCiclo: 0,
    idCurso: 0,
    codigo: '',
    nombre: '',
    creditos: 0,
    nCampos: 0,
    promedioFinal: 0,
    promedioTemporal: 0,
    vez: 0,
    porcentajeCumplido: 0
  }
  maximaNotaPosible: number = 0

  constructor(public cursoService: CursoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cursoService.getById(this.idCursoSelected)
      .subscribe(curso => {
        this.curso = curso
        this.maximaNotaPosible = (this.curso.porcentajeCumplido/100)*20
      })
  }

  refresh(): void{
    this.cursoService.getById(this.idCursoSelected)
      .subscribe(curso => {
        this.curso = curso
        this.maximaNotaPosible = (this.curso.porcentajeCumplido/100)*20
      })
    console.log('Actualizando Info curso...');
    
  }

  ngOnInit(): void {
  }

  updateGradeTemp(promedioTemp: number, porcentajeCumplido: number): void{
    this.curso.promedioTemporal = promedioTemp,
    this.curso.promedioFinal = promedioTemp, //TODO: Falta redondear
    this.curso.porcentajeCumplido = porcentajeCumplido,
    this.maximaNotaPosible = (this.curso.porcentajeCumplido/100)*20
  }
}
