import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//The Injectable decorator is required to tell Angular that this class is can be injected into other classes.
@Injectable({
    //Where a service should be available
    //root ==> singleton service available to the whole application
    //platform ==> special singleton platform injector shared by all applications on the page. 
    //any ==> a new instance of the service in each lazy-loaded module while eagerly loaded modules share a singleton instance.  // DEPRECATED since Angular v15
    //providedIn: MyModule // DEPRECATED since Angular v15 
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