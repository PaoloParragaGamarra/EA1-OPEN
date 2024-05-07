export class Exam {
  id:any
  patientId:any
  examinerId:any
  examDate:any
  orientationScore:any
  registrationScore:any
  attentionAndCalculationScore:any
  recallScore:any
  languageScore:any
  constructor(id:any, patientId:any, examinerId:any, examDate:any, orientationScore:any, registrationScore:any, attentionAndCalculationScore:any, recallScore:any, languageScore:any) {
    this.id = id;
    this.patientId = patientId;
    this.examinerId = examinerId;
    this.examDate = examDate;
    this.orientationScore = orientationScore;
    this.registrationScore = registrationScore;
    this.attentionAndCalculationScore = attentionAndCalculationScore;
    this.recallScore = recallScore;
    this.languageScore = languageScore;
  }

}
