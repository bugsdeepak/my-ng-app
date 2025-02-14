import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';

//The following is Component Decorator. It is a function that takes an object as an argument.
@Component({
  selector: 'courses', // This is simple tag. For div id use #courses for class use .courses
  //template: `<h2>{{ title }}</h2>`,
  //template: `  //<h2>{{ title }}</h2>
  //   //<ul>
  //  <li *ngFor="let course of courses">
  //    {{ course }}
  //  </li>
  //  </ul>
  //`,
  imports: [CommonModule],  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent {

  title = 'List of Courses';
  courses : Observable<string[]>; //courses is an array of strings
  
  //Dependency Injection ==> we are injecting the CoursesService into the constructor of the CoursesComponent class
  //Register the dependency in the module as a "provider". This is a singleton object.
  constructor (service: CoursesService) {
    //let service = new CoursesService();
    this.courses = service.getCourses();
  }

}