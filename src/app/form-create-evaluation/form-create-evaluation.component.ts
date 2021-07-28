import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateEvaluacion } from '../models/createEvaluacion.model';
import { Evaluacion } from '../models/evaluacion.model';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { EvaluacionService } from '../services/evaluacion.service';

@Component({
  selector: 'app-form-create-evaluation',
  templateUrl: './form-create-evaluation.component.html',
  styleUrls: ['./form-create-evaluation.component.css']
})
export class FormCreateEvaluationComponent implements OnInit {
  @Input() idCursoSelected: number = 0
  @Output() evaluationCreated = new EventEmitter();

  evaluaciones: Evaluacion[] = []
  idEvaluacionSelected: number = 0

  form: FormGroup;
  evaluacionCreate: CreateEvaluacion={
    idCurso: 0,
    idEvaluacion: 0,
    peso: 0,
    nota: 0
  }

  constructor(public evaluacionService: EvaluacionService) {
    this.form = new FormGroup({});
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      peso: new FormControl('')
    });

    this.evaluacionService.getAll()
      .subscribe(evas => {
        this.evaluaciones = evas
        this.evaluaciones.sort((a, b) => b.descripcion.localeCompare(a.descripcion))
        this.evaluaciones.reverse()
      })
  }

  evaluacionSelectionChangeMethod(event: any): void {
    this.idEvaluacionSelected = event.value
    console.log(this.idEvaluacionSelected)
  }

  registerEvaluacion(evaluacion: any){
    this.evaluacionCreate = {
      idCurso: this.idCursoSelected,
      idEvaluacion: this.idEvaluacionSelected,
      peso: evaluacion.peso,
      nota:0
    }
    this.evaluacionService.createCursoEvaluacion(this.evaluacionCreate)
      .subscribe(res=>{
        this.evaluationCreated.emit();
        console.log('Evaluacion a registrar: ', this.evaluacionCreate)
      })
  }

}
