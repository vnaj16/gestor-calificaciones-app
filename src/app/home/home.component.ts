import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../models/ciclo.model';
import { CicloService } from '../services/ciclo.service';
import { SelectCicloHomeComponent } from '../select-ciclo-home/select-ciclo-home.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
