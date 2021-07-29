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
    nCampos:0,
    promedioFinal:0,
    promedioTemporal:0,
    vez:0
  }

  constructor(public cursoService: CursoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cursoService.getById(this.idCursoSelected)
      .subscribe(curso=>this.curso = curso)
  }

  ngOnInit(): void {
  }

}
