import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../models/ciclo.model';
import {CicloInfo} from '../models/cicloInfo.model';
import { CicloService } from '../services/ciclo.service';
import {CreateCiclo} from '../models/createCiclo.model';

@Component({
  selector: 'app-select-ciclo-home',
  templateUrl: './select-ciclo-home.component.html',
  styleUrls: ['./select-ciclo-home.component.css']
})
export class SelectCicloHomeComponent implements OnInit {

  ciclos: Ciclo[] = [];
  ciclo: CicloInfo = {} as CicloInfo;
  cicloCreate: CreateCiclo = {
    periodo: '1406-01',
    nCursos:6
  };
  responsePost: any
  constructor(public cicloService: CicloService) { }

  ngOnInit(): void {
    this.cicloService.getAll()
      .subscribe(ciclos=> {this.ciclos = ciclos});
    this.cicloService.getById(1)
      .subscribe(ciclo=>{this.ciclo = ciclo});
    this.cicloService.create(this.cicloCreate).subscribe(res=>{
      this.responsePost = res
    })
    console.log(this.responsePost);
  }

  PostCiclo(): void{
    console.log('Posting...');
    this.cicloService.create(this.cicloCreate).subscribe(res=>{
      this.responsePost = res
    })
    console.log(this.responsePost);
  }
}
