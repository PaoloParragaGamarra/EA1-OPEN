import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MentalStateService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllExams() {
    return this.http.get(this.baseUrl + '/mental-state-exams');
  }

}
