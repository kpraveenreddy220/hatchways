import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "./student";

@Pipe({name: 'nameFilter'})
export class NameFilter implements PipeTransform {
  transform(students: Student[], name: string): Student[] {
    if (!name) {
      return students;
    }
    return students.filter(s => s.firstName.indexOf(name) > -1 || s.lastName.indexOf(name) > -1);
  }
}
