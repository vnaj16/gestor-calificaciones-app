import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../models/ciclo.model';
import { CicloService } from '../services/ciclo.service';

@Component({
  selector: 'app-select-ciclo-home',
  templateUrl: './select-ciclo-home.component.html',
  styleUrls: ['./select-ciclo-home.component.css']
})
export class SelectCicloHomeComponent implements OnInit {

  ciclos: Ciclo[] = [];

  constructor(public cicloService: CicloService) { }

  ngOnInit(): void {
    this.cicloService.getAll()
      .subscribe(ciclos=> {this.ciclos = ciclos});
  }
}
