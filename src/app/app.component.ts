import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular course';
  courses: string[];
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
