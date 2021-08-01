import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { EvaluacionService } from '../services/evaluacion.service';

@Component({
  selector: 'app-form-update-grade',
  templateUrl: './form-update-grade.component.html',
  styleUrls: ['./form-update-grade.component.css']
})
export class FormUpdateGradeComponent implements OnInit {
  @Input() idCursoSelected: any
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
    console.log('Actualizar nota: ', event)
    this.cursoEvaluacionSelected.nota = event.nota
    console.log('Objeto Actualizar: ', this.cursoEvaluacionSelected)
    this.evaluacionService
      .updateGrade(this.idCursoSelected,this.cursoEvaluacionSelected.idCursoEvaluacion,this.cursoEvaluacionSelected)
      .subscribe(()=>{})
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

    console.log("Objeto seleccionado: ", this.cursoEvaluacionSelected)

    this.form = new FormGroup({
      idCursoEvaluacion: new FormControl(this.cursoEvaluacionSelected.idCursoEvaluacion),
      nota: new FormControl(this.cursoEvaluacionSelected.nota)
    });
  }

}
