import {SelectionModel} from '@angular/cdk/collections';
import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { EvaluacionService } from '../services/evaluacion.service';

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

  
  constructor(public evaluacionService: EvaluacionService) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['select', 'tipo', 'numero', 'descripcion', 'peso', 'nota'];
  dataSource: EvaluacionInfo[] = []
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<string>(true, []);


  ngOnChanges(changes: SimpleChanges): void {
    this.evaluacionService.getByCurso(this.idCursoSelected)
      .subscribe(evas=>this.dataSource = evas)
  }

  onClick($event: any): void{
    $event.stopPropagation()
    console.log('On click method: ', $event)
  }

  onChange($event: any, row:any): void{ //TODO: HERE IS
    $event ? this.selection.toggle(row) : null;
    console.log('On chnage method: ', $event, row)
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