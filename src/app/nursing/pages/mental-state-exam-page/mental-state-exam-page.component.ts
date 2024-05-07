import { Component } from '@angular/core';
import {ExamCardsComponent} from "../../components/exam-cards/exam-cards.component";

@Component({
  selector: 'app-mental-state-exam-page',
  standalone: true,
  imports: [
    ExamCardsComponent
  ],
  templateUrl: './mental-state-exam-page.component.html',
  styleUrl: './mental-state-exam-page.component.css'
})
export class MentalStateExamPageComponent {

}
