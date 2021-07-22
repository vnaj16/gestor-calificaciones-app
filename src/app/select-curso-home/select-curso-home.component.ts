import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-select-curso-home',
  templateUrl: './select-curso-home.component.html',
  styleUrls: ['./select-curso-home.component.css']
})
export class SelectCursoHomeComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(public cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getAll()
      .subscribe(cursos=>{this.cursos=cursos});
  }

}
