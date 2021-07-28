import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-register-cycle',
  templateUrl: './page-register-cycle.component.html',
  styleUrls: ['./page-register-cycle.component.css']
})
export class PageRegisterCycleComponent implements OnInit {
  idCicloSelected: any;
  idCursoSelected: any;

  constructor() { }

  ngOnInit(): void {
    this.idCursoSelected = 0
  }

  cicloSelectionChangeMethod(selection: any): void{
    this.idCicloSelected = selection.value
    console.log('In Home component', selection)
  }

  cursoSelectionChangeMethod(value: any): void{
    this.idCursoSelected = value
  }
}
