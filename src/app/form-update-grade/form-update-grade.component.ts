import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { EvaluacionService } from '../services/evaluacion.service';
import { TableEvaluacionRegisterGradeEvent } from '../shared/tableEvaluacionRegisterGradeEvent';

@Component({
  selector: 'app-form-update-grade',
  templateUrl: './form-update-grade.component.html',
  styleUrls: ['./form-update-grade.component.css']
})
export class FormUpdateGradeComponent implements OnInit {
  @Input() idCursoSelected: any
  @Output() evaluationSelectionChanged= new EventEmitter();
  @Output() gradeUpdated= new EventEmitter();
  evaluaciones: EvaluacionInfo[] = []
  form: FormGroup;
  cursoEvaluacionSelected: EvaluacionInfo = {
    idCursoEvaluacion:0,
    idEvaluacion:0,
    idCurso:0,
    descripcion:'',
    nota:0,
    peso:0,
    tipo:'',
    numero:0,
    rellenado: false
  }
  //cursoEvaluacionSelected: any = {}

  constructor(public evaluacionService: EvaluacionService) {
    this.form = new FormGroup({});
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      idCursoEvaluacion: new FormControl(0),
      nota: new FormControl(0)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas => {
        this.evaluaciones = evas
        this.evaluaciones.sort((a, b) => b.descripcion.localeCompare(a.descripcion))
        this.evaluaciones.reverse()
        console.log(this.evaluaciones)
      })
  }

  updateGrade(event: any): void{
    this.cursoEvaluacionSelected.nota = event.nota
    this.evaluacionService
      .updateGrade(this.idCursoSelected,this.cursoEvaluacionSelected.idCursoEvaluacion,this.cursoEvaluacionSelected)
      .subscribe(()=>{this.gradeUpdated.emit()})//Por buenas practicas, deberia retornar el id del curso
  }

  evaluacionSelectionChangeMethod(event: any): void{
    this.cursoEvaluacionSelected = this.evaluaciones.find(x=>x.idCursoEvaluacion == event.value) || {
      idCursoEvaluacion:0,
      idEvaluacion:0,
      idCurso:0,
      descripcion:'',
      nota:0,
      peso:0,
      tipo:'',
      numero:0,
      rellenado: false
    }

    this.form = new FormGroup({
      idCursoEvaluacion: new FormControl(this.cursoEvaluacionSelected.idCursoEvaluacion),
      nota: new FormControl(this.cursoEvaluacionSelected.nota)
    });

    this.evaluationSelectionChanged.emit(this.cursoEvaluacionSelected.idCursoEvaluacion)
  }

  updateEvaluationSelection($event: TableEvaluacionRegisterGradeEvent): void{
    this.form.setValue({idCursoEvaluacion: $event.idCursoEvaluacion, nota:$event.nota})
  }
}
