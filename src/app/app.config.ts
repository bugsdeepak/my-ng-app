import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CoursesService } from './courses/courses.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    //Hydration can be enabled for server-side rendered (SSR) applications only
    provideClientHydration(withEventReplay()),
    //Dependency Injection ==> we are injecting the CoursesService into the constructor of the CoursesComponent class
    //this is a singleton object
    CoursesService,
    //the following is a helper function that returns an object that is used to configure the HttpClient
    provideHttpClient(withFetch())
  ]
};
