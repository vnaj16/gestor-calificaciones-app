import { Component, OnInit } from '@angular/core';

const USER_INFO = [
  {"name": "John Smith", "occupation": "Advisor", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
];

const USER_SCHEMA = {
  "name": "text",
  "occupation": "text",
  "age": "number",
}

@Component({
  selector: 'app-table-evaluaciones-home',
  templateUrl: './table-evaluaciones-home.component.html',
  styleUrls: ['./table-evaluaciones-home.component.css']
})
export class TableEvaluacionesHomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'occupation', 'age', 'edit'];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;

  constructor() { }

  ngOnInit(): void {
  }

  viewData(): void{
    console.log(USER_INFO)
  }

}
