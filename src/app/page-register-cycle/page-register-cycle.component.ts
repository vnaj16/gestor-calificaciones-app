import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-register-cycle',
  templateUrl: './page-register-cycle.component.html',
  styleUrls: ['./page-register-cycle.component.css']
})
export class PageRegisterCycleComponent implements OnInit {
  idCicloSelected: any;

  constructor() { }

  ngOnInit(): void {
  }

  cicloSelectionChangeMethod(selection: any): void{
    this.idCicloSelected = selection.value
    console.log('In Home component', selection)
  }
}
