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
  //Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on. 
  //Re-exported by BrowserModule, which is included automatically in the root AppModule when you create a new app with 
  //the CLI new command.
  imports: [CommonModule],  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  // Standalone components are not part of any module. They are not imported into any module.
  //They do not need to be declared in an NgModule and can import their dependencies directly. 
  standalone: true
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