import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CicloInfo } from '../models/cicloInfo.model';
import { CreateCiclo } from '../models/createCiclo.model';
import { CicloService } from '../services/ciclo.service';

@Component({
  selector: 'app-form-update-promedio-beca',
  templateUrl: './form-update-promedio-beca.component.html',
  styleUrls: ['./form-update-promedio-beca.component.css']
})
export class FormUpdatePromedioBecaComponent implements OnInit {
  @Input() idCicloSelected: any
  form: FormGroup;
  cicloDB: CicloInfo = {
    idCiclo:0,
    periodo: '',
    nCursos: 0,
    promedioFinal: 0,
    promedioBeca:0
  }

  constructor(public cicloService: CicloService) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      promedioBeca: new FormControl(0)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cicloService.getById(this.idCicloSelected)
      .subscribe(res => {
        this.form = new FormGroup({
          promedioBeca: new FormControl(res.promedioBeca)
        });
      })
  }

  updatePromedioBeca(ciclo: any) {
    this.cicloService.getById(this.idCicloSelected)
      .subscribe(res => {
        this.cicloDB = res
        this.cicloDB.promedioBeca = ciclo.promedioBeca
        this.cicloService.update(this.idCicloSelected,this.cicloDB)
          .subscribe(()=>{})
      })
  }

}
