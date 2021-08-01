export class TableEvaluacionEmittedData{
    promedioTemp: number
    porcentajeCumplido: number
  
    constructor(promedioTemp: number, porcentajeCumplido: number) {
      this.porcentajeCumplido = porcentajeCumplido,
      this.promedioTemp=promedioTemp
    }
  }