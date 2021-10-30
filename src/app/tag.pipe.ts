import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "./student";

@Pipe({name: 'tagFilter'})
export class TagFilter implements PipeTransform {
  transform(students: Student[], tag: string): Student[] {
    if (!tag) {
      return students;
    }
    return students.filter(s => {
     return s.tags?.some(t => {
       return t.indexOf(tag) > -1;
     })
    });
  }
}
