import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateCiclo } from '../models/createCiclo.model';
import { CicloService } from '../services/ciclo.service';

@Component({
  selector: 'app-form-create-cycle',
  templateUrl: './form-create-cycle.component.html',
  styleUrls: ['./form-create-cycle.component.css']
})
export class FormCreateCycleComponent implements OnInit {
  form: FormGroup;
  cicloCreate: CreateCiclo = {
    periodo: '',
    nCursos: 0
  };
  responsePost: any

  constructor(public cicloService: CicloService) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      periodo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(7),
        Validators.minLength(7)
      ])), //TODO: Crear un metodo que me coloque el periodo actual, jalando la fecha
      numeroCursos: new FormControl(5, Validators.required)
    });
  }

  onSubmit(ciclo: any) {
    this.cicloCreate = {
      periodo: ciclo.periodo,
      nCursos: ciclo.numeroCursos
    }

    console.log(ciclo);
    this.cicloService.create(this.cicloCreate).subscribe(res => {
      this.responsePost = res
      console.log(this.responsePost);
    })
  }
}
