import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {Student} from './student';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('https://api.hatchways.io/assessment/students');
  }
}
