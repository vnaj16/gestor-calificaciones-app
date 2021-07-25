import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';
import { CicloService } from '../services/ciclo.service';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-select-curso-home',
  templateUrl: './select-curso-home.component.html',
  styleUrls: ['./select-curso-home.component.css']
})
export class SelectCursoHomeComponent implements OnInit {
  @Input() idCicloSelected: any;
  @Output() cursoSelectionChange = new EventEmitter();

  cursos: Curso[] = [];

  constructor(public cursoService: CursoService, public cicloService: CicloService) { }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  cursoSelectionChangeMethod(event: MatSelectionListChange): void{
    this.cursoSelectionChange.emit(event.option.value)
    console.log("List view: ", event.option.value)
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    this.cicloService.getCursosByCiclo(this.idCicloSelected)
    .subscribe(cursos=>this.cursos = cursos);
  }

}
