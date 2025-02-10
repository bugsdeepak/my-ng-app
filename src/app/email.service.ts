import { Injectable } from '@angular/core';


//Decorator  ==> It is a function that takes an object as an argument.
//It is used to define the metadata for the class.
//The Injectable decorator is required to tell if the class constructor has any injected dependencies.
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
