import { Component, OnInit } from '@angular/core';
import { InfoCursoHomeComponent } from '../info-curso-home/info-curso-home.component';
import { TableEvaluacionesRegisterGradeComponent } from '../table-evaluaciones-register-grade/table-evaluaciones-register-grade.component';

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

  myMethod(element: InfoCursoHomeComponent, table: TableEvaluacionesRegisterGradeComponent): void{
    element.refresh()
    table.refresh()
  }
}
