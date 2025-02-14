import { Injectable } from '@angular/core';


//Decorator  ==> It is a function that takes an object as an argument.
//It is used to define the metadata for the class.
//The Injectable decorator is required to tell Angular that this class is a service that can be injected into other classes.
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() { }
}
