import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-register-grade',
  templateUrl: './page-register-grade.component.html',
  styleUrls: ['./page-register-grade.component.css']
})
export class PageRegisterGradeComponent implements OnInit {
  idCicloSelected: any;
  idCursoSelected: any;

  constructor() { }

  ngOnInit(): void {
  }

  cicloSelectionChangeMethod(selection: any): void{
    this.idCicloSelected = selection.value
  }

  cursoSelectionChangeMethod(event: any): void{
    this.idCursoSelected = event
    console.log('Here', event)
  }
}
