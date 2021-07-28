import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { EvaluacionService } from '../services/evaluacion.service';

const USER_SCHEMA = {
  "tipo": "text",
  "numero": "number",
  "descripcion": "text",
  "peso": "number"
}

@Component({
  selector: 'app-table-evaluaciones-register-cycle',
  templateUrl: './table-evaluaciones-register-cycle.component.html',
  styleUrls: ['./table-evaluaciones-register-cycle.component.css']
})
export class TableEvaluacionesRegisterCycleComponent implements OnInit {
  @Input() idCursoSelected: any;

  displayedColumns: string[] = ['tipo', 'numero', 'descripcion', 'peso'];
  dataSource: EvaluacionInfo[] = []
  dataSchema = USER_SCHEMA;

  constructor(public evaluacionService: EvaluacionService) { }

  ngOnInit(): void {
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas=>this.dataSource = evas)
  }

  updateTable(): void{
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas=>this.dataSource = evas)
      console.log('Actualizando table de evaluaciones...')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas=>this.dataSource = evas)
      console.log('Actualizando table de evaluaciones...')
  }
}
