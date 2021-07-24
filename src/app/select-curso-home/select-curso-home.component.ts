import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';
import { CicloService } from '../services/ciclo.service';

@Component({
  selector: 'app-select-curso-home',
  templateUrl: './select-curso-home.component.html',
  styleUrls: ['./select-curso-home.component.css']
})
export class SelectCursoHomeComponent implements OnInit {
  @Input() idCicloSelected: any;

  cursos: Curso[] = [];

  constructor(public cursoService: CursoService, public cicloService: CicloService) { }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  cursoSelectionOpenMethod(opened: any): void{
    console.log("Select curso abierto", opened)
    if(opened){
      this.cicloService.getCursosByCiclo(this.idCicloSelected)
      .subscribe(cursos=>this.cursos = cursos);
    }
  }

}
