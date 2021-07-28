import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../models/curso.model';
import { CursoService } from '../services/curso.service';
import { CicloService } from '../services/ciclo.service';

@Component({
  selector: 'app-select-curso-register-cycle',
  templateUrl: './select-curso-register-cycle.component.html',
  styleUrls: ['./select-curso-register-cycle.component.css']
})
export class SelectCursoRegisterCycleComponent implements OnInit {
  @Input() idCicloSelected: any;
  @Output() cursoSelectionChange = new EventEmitter();

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

  cursoSelectionChangeMethod(event: any): void{
    console.log('Select Curso Register Cycle value: ', event)
    this.cursoSelectionChange.emit(event.value)
  }
}
