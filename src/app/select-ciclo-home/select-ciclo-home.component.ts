import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ciclo } from '../models/ciclo.model';
//import {CicloInfo} from '../models/cicloInfo.model';
import { CicloService } from '../services/ciclo.service';


@Component({
  selector: 'app-select-ciclo-home',
  templateUrl: './select-ciclo-home.component.html',
  styleUrls: ['./select-ciclo-home.component.css']
})
export class SelectCicloHomeComponent implements OnInit {
  @Output() cicloSelectionChange = new EventEmitter();

  ciclos: Ciclo[] = [];
  // ciclo: CicloInfo = {} as CicloInfo;
  // cicloCreate: CreateCiclo = {
  //   periodo: '1406-01',
  //   nCursos:6
  // };
  responsePost: any
  indexLastCiclo: number
  constructor(public cicloService: CicloService) {
    this.indexLastCiclo = 1
  }

  ngOnInit(): void {
    this.cicloService.getAll()
      .subscribe(ciclos => {
        this.ciclos = ciclos
        this.indexLastCiclo = this.ciclos.length - 1
      });


    // this.cicloService.getById(1)
    //   .subscribe(ciclo=>{this.ciclo = ciclo});
    // this.cicloService.create(this.cicloCreate).subscribe(res=>{
    //   this.responsePost = res
    // })
    // console.log(this.responsePost);
  }

  cicloSelectionChangeMethod(selection: any): void {
    this.cicloSelectionChange.emit(selection);
  }

  // PostCiclo(): void{
  //   console.log('Posting...');
  //   this.cicloService.create(this.cicloCreate).subscribe(res=>{
  //     this.responsePost = res
  //   })
  //   console.log(this.responsePost);
  // }
}
