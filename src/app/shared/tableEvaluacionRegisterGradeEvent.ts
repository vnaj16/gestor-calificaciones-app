export class TableEvaluacionRegisterGradeEvent{
    idCursoEvaluacion: number
    nota: number
  
    constructor(idCursoEvaluacion: number, nota: number) {
      this.idCursoEvaluacion = idCursoEvaluacion,
      this.nota=nota
    }
  }