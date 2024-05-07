import {Component, OnInit} from '@angular/core';
import {MentalStateService} from "../../service/mental-state.service";
import {Exam} from "../../model/exam.model";
import {MatCardModule} from "@angular/material/card";
import {Patient} from "../../../shared/model/patient.model";
import {PatientService} from "../../../shared/service/patient.service";
import {ExaminerService} from "../../../shared/service/examiner.service";
import {Examiner} from "../../../shared/model/examiner.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-exam-cards',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf
  ],
  templateUrl: './exam-cards.component.html',
  styleUrl: './exam-cards.component.css'
})
export class ExamCardsComponent implements OnInit {
  examData: any;
  patientData: any;
  examinerData: any;

  patientData2 !: Patient;
  examinerData2 !: Examiner;

  exams: any[] = [];
  patients: any[] = [];
  examiners: any[] = [];

  constructor(private mentalStateService: MentalStateService, private patientService: PatientService,private examinerService: ExaminerService) {

  }

  ngOnInit() {
    this.getExams();
    this.getPatients();
    this.getExaminers();
    this.patientData2 ={} as Patient
    this.examinerData2 = {} as Examiner
  }

  getExams() {
    this.mentalStateService.getAllExams().subscribe((data: any) => {
      data.forEach((exam: any) => {
        this.examData = new Exam(exam.id, exam.patientId, exam.examinerId, exam.examDate, exam.orientationScore, exam.registrationScore, exam.attentionAndCalculationScore, exam.recallScore, exam.languageScore)
        this.exams.push(this.examData);
      });
    });
  }

  getPatients() {
    this.patientService.getAllPatients().subscribe((data: any) => {
      data.forEach((patient: any) => {
        this.patientData = new Patient(patient.id, patient.firstName, patient.lastName, patient.photoUrl, patient.birthDate)
        this.patients.push(this.patientData);
      });
    });
  }

  getExaminers(){
    this.examinerService.getAllExaminers().subscribe((data: any) => {
      data.forEach((examiner: any) => {
        this.examinerData = new Examiner(examiner.id, examiner.firstName, examiner.lastName, examiner.nationalProviderIdentifier)
        this.examiners.push(this.examinerData);
      });
    });
  }

  getPatientPhotoUrl(patientId: number): string {
    const patient = this.patients.find(patient => patient.id === patientId);
    return patient ? patient.photoUrl : '';
  }

  getPatientFullName(patientId: number): string {
    const patient = this.patients.find(patient => patient.id === patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : '';
  }

  getExaminerFullName(examinerId: number): string {
    const examiner = this.examiners.find(examiner => examiner.id === examinerId);
    return examiner ? `${examiner.firstName} ${examiner.lastName}` : '';
  }

  calculateTotalScore(exam: Exam): number {
    return exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;
  }
}
