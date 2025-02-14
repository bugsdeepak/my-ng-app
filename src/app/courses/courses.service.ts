import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//The Injectable decorator is required to tell Angular that this class is can be injected into other classes.
@Injectable({
    providedIn: 'root',
  })
export class CoursesService {

    private apiUrl = "http://localhost:8080";

    constructor( private http: HttpClient) {}

    getCourses() {

        return this.http.get<string[]>(this.apiUrl + "/courses");

        //return ["Java", "JavaScript", "TypeScript"];
    }
}