import { Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { EvaluacionService } from '../services/evaluacion.service';
import { GestorCalificacionesService } from '../services/gestorCalificaciones.service';
import { TableEvaluacionEmittedData } from '../shared/tableEvaluacionEmittedData';

const USER_SCHEMA = {
  "tipo": "text",
  "numero": "number",
  "descripcion": "text",
  "peso": "number",
  "nota": "number",
}

@Component({
  selector: 'app-table-evaluaciones-home',
  templateUrl: './table-evaluaciones-home.component.html',
  styleUrls: ['./table-evaluaciones-home.component.css']
})
export class TableEvaluacionesHomeComponent implements OnInit {
  @Input() idCursoSelected: any;
  @Output() evaluationGradeChanged= new EventEmitter();

  displayedColumns: string[] = ['tipo', 'numero', 'descripcion', 'peso', 'nota', 'edit'];
  dataSource: EvaluacionInfo[] = []
  dataSchema = USER_SCHEMA;

  
  constructor(public evaluacionService: EvaluacionService, public gestorCalificacionesService: GestorCalificacionesService) { }

  ngOnInit(): void {
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas=>this.dataSource = evas)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas=>this.dataSource = evas)
  }

  viewData(): void {
    console.log(this.dataSource)
  }

  processChanges(element: any): void{
    element.isEdit = !element.isEdit
    console.log("Por aca calculare el nuevo promedio y tal")
    console.log(this.dataSource)
    this.evaluationGradeChanged.emit(this.gestorCalificacionesService.computeNewAverage(this.dataSource))
  }

}

