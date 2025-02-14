import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from "./courses/courses.component";
import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private title = 'my-ng-app';
  constructor(service: CoursesService) {}
    

    ngOnInit(): void { }
      
}
