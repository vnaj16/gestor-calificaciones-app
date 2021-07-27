import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CicloInfo } from '../models/cicloInfo.model';
import { CreateCurso } from '../models/createCurso.model';
import { CicloService } from '../services/ciclo.service';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-form-create-course',
  templateUrl: './form-create-course.component.html',
  styleUrls: ['./form-create-course.component.css']
})
export class FormCreateCourseComponent implements OnInit {
  @Input() idCicloSelected: any
  form: FormGroup;
  ciclo: CicloInfo = {
    idCiclo: 0,
    periodo: '',
    promedioBeca: 0,
    promedioFinal: 0,
    nCursos: 0
  }
  cursoCreate: CreateCurso={
    idCiclo: 0,
    codigo:'',
    nombre:'',
    creditos:0,
    nCampos:0,
    vez:0
  }

  constructor(public cicloService: CicloService) { 
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      codigo: new FormControl(''),
      nombre: new FormControl(''),
      creditos: new FormControl(''),
      nCampos: new FormControl(''),
      vez: new FormControl('')
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cicloService.getById(this.idCicloSelected)
    .subscribe(ciclo=>this.ciclo = ciclo)
  }

  onSubmit(curso:any){
    this.cursoCreate={
      idCiclo: this.ciclo.idCiclo,
      codigo: curso.codigo,
      nombre: curso.nombre,
      creditos: curso.creditos,
      nCampos: curso.nCampos,
      vez: curso.vez
    }

    console.log('Curso a registrar:',this.cursoCreate);
    //TODO: Faltaria llamar al post de curso
  }

}
