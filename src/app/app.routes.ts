import { Routes } from '@angular/router';
import {HomePageComponent} from "./public/pages/home-page/home-page.component";
import {MentalStateExamPageComponent} from "./nursing/pages/mental-state-exam-page/mental-state-exam-page.component";
import {NotfoundPageComponent} from "./public/pages/notfound-page/notfound-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomePageComponent},
  {path:'', redirectTo:'/nursing', pathMatch:'full'},
  {path:'nursing/mental-state-exams', component: MentalStateExamPageComponent},
  {path:'**', component:NotfoundPageComponent}

];
