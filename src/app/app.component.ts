import {Component, OnInit} from '@angular/core';
import {StudentService} from "./app.service";
import {Student} from "./student";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  students: Student[] = [];
 // results$: Observable<any> = new Observable<any>();
  nameSearch: FormControl = new FormControl;
  tagSearch: FormControl = new FormControl;
  tag: FormControl = new FormControl;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    // this.results$ = this.studentService.getStudents();
    this.studentService.getStudents().subscribe((res: any) => this.students = res.students);
    this.nameSearch = new FormControl();
    this.tagSearch = new FormControl();
    this.tag = new FormControl();
  }

  clickToExpandClose(id: number) {
      let stu = this.students.find(s => s.id === id);
      if (stu) {
        if (stu.expanded)
          stu.expanded = false;
        else {
          stu.expanded = true;
        }
      }
  }

  addNewTag(id: number, tag: string) {
    if (tag) {
      let stu = this.students.find(s => s.id === id);
      if (!stu?.tags) { // @ts-ignore
        stu?.tags = [tag];
      } else {
        stu?.tags.push(tag);
      }
      this.tag.reset();
    }
  }
}
