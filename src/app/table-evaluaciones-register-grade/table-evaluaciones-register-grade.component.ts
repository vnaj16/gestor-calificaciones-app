import {SelectionModel} from '@angular/cdk/collections';
import {Component, Input, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { EvaluacionService } from '../services/evaluacion.service';
import { TableEvaluacionRegisterGradeEvent } from '../shared/tableEvaluacionRegisterGradeEvent';

/**
 * @title Table with selection
 */
 @Component({
  selector: 'app-table-evaluaciones-register-grade',
  templateUrl: './table-evaluaciones-register-grade.component.html',
  styleUrls: ['./table-evaluaciones-register-grade.component.css']
})
export class TableEvaluacionesRegisterGradeComponent implements OnInit {
  @Input() idCursoSelected: any;
  @Output() evaluationSelectionChanged = new EventEmitter()
  
  constructor(public evaluacionService: EvaluacionService) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['select', 'tipo', 'numero', 'descripcion', 'peso', 'nota'];
  dataSource: EvaluacionInfo[] = []
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<EvaluacionInfo>(false, []);


  ngOnChanges(changes: SimpleChanges): void {
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas=>this.dataSource = evas)
  }

  refresh(): void{
    this.evaluacionService.getByCurso(this.idCursoSelected)
    .subscribe(evas=>this.dataSource = evas)
  }

  onChange($event: any, row:EvaluacionInfo): void{ //TODO: HERE IS
    $event ? this.selection.toggle(row) : null;

    if($event.checked){
      console.log('On chnage method: ', $event, row)
      console.log('Selection: ', this.selection);
      let eventData = new TableEvaluacionRegisterGradeEvent(row.idCursoEvaluacion, row.nota)
      this.evaluationSelectionChanged.emit(eventData)
    } 
  }

  updateEvaluationSelection($event: any): void{
    let objectBtw = {
      idCursoEvaluacion:0,
      idEvaluacion:0,
      idCurso:0,
      descripcion:'',
      nota:0,
      peso:0,
      tipo:'',
      numero:0,
      rellenado: false
    }
    this.selection.select(this.dataSource.find(x=>x.idCursoEvaluacion==$event) || objectBtw)
  }

  
  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   //const numRows = this.dataSource.data.length;
  //   return numSelected === 1;//numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   if (this.isAllSelected()) {
  //     //this.selection.clear();
  //     return;
  //   }

  //   //this.selection.select(...this.dataSource.data);
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: any): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

}