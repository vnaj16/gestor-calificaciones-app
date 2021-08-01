import { Injectable } from '@angular/core';
import { EvaluacionInfo } from '../models/evaluacionInfo.model';
import { TableEvaluacionEmittedData } from '../shared/tableEvaluacionEmittedData';

@Injectable({
  providedIn: 'root'
})
export class GestorCalificacionesService {

  constructor() { }

  computeNewAverage(evaluaciones: EvaluacionInfo[]): TableEvaluacionEmittedData{


    let promedioTemp = 0
    let porcentajeCumplido =0
    evaluaciones.forEach(element => {
        //if(element.rellenado){
            porcentajeCumplido+=element.peso
            promedioTemp += (element.peso * element.nota)/100;
        //}
    });

    const valueToReturn = new TableEvaluacionEmittedData(promedioTemp,porcentajeCumplido);

    return valueToReturn;
  }
}