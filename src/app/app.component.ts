import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from "./courses/courses.component";
//import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'app-root',
  //Eagerly loaded components are loaded when the application starts. The following are eagerly loaded components:
  imports: [RouterOutlet, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { //implements OnInit {

  title = 'my-ng-app';
  //constructor(service: CoursesService) {}
    

    //ngOnInit(): void { }
      
}
