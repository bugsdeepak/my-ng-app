Angular Set up and Interview Questions

1.	Install Node.js
2.	npm install -g @angular/cli
3.	Visual Studio Code  As an optional, but recommended step you can further improve your developer experience by installing the Angular Language Service
4.	In your project directory, navigate to the first-app directory and run “npm install”  to install the dependencies needed to run the app
5.	 Run this command to build and serve the default app.  ng serve –port 4200 (default port)

Review The Files in the Project

1.	In your project directory, navigate to the first-app directory.
2.	Open the src directory to see these files.
a.	In the file explorer, find the Angular app files (/src).
i.	index.html is the app's top level HTML template.
ii.	style.css is the app's top level style sheet.
iii.	main.ts is where the app start running.
iv.	favicon.ico is the app's icon, just as you would find in any web site.
b.	In the file explorer, find the Angular app's component files (/app).
i.	app.component.ts is the source file that describes the app-root component. This is the top-level Angular component in the app. A component is the basic building block of an Angular application. The component description includes the component's code, HTML template, and styles, which can be described in this file, or in separate files.
In this app, the styles are in a separate file while the component's code and HTML template are in this file.
ii.	app.component.css is the style sheet for this component.
iii.	New components are added to this directory.
c.	In the file explorer, find the image directory (/assets) that contains images used by the app.
d.	In the file explorer, find the files and directories that an Angular app needs to build and run, but they are not files that you normally interact with.
i.	.angular has files required to build the Angular app.
ii.	.e2e has files used to test the app.
iii.	.node_modules has the node.js packages that the app uses.
iv.	angular.json describes the Angular app to the app building tools.
v.	package.json is used by npm (the node package manager) to run the finished app.
vi.	tsconfig.* are the files that describe the app's configuration to the TypeScript compiler.

Push to Github
echo "# first-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/bugsdeepak/first-app.git
git push -u origin main
Angular Concepts – Angular is a binding framework

Angular JS – Angular version 1, 1.0, 1.1 - Java Script based - 
Angular – Angular version 2 onwards – Type Script based – Components – Server Side – CLI – Mobile complaint
NPM – Node Package Manager. Help install any JavaScript frameworks. “node_modules” – folder in which all the packages are installed.
Type Script: Strongly typed. And provide object-oriented environment. Finally get converted to Java Script
Var x: number;
X++; //no compilation error
X = “ “ ; //Compilation error
Q: Difference between Angular JS and Angular?
Angular JS refers to Angular Version 1 – 1.1, 1.2, etc (Based on JavaScript)
Angular refers to Angular Version 2 – 2, 3, 10, 15 (Based on TypeScript)
Java Script – Object based language (you cannot create own objects)
Type Script – Object oriented language - Strongly typed language 
The Key Building Blocks of an Angular Application
1.	Modules. There are two types of modules in Angular - root modules and feature modules. ...
2.	Components. ...
3.	Templates. ...
4.	Metadata. ...
5.	Data Binding. ...
6.	Directives. ...
7.	Services. ...
8.	Dependency Injection.
1.	Components (Agular’s building blocks)

Component is where you write your binding code. Module logically groups components.

Components contain the code, HTML layout, and CSS style information that provide the function and appearance of an element in the app. components can contain other components
Component binds Model and View (and CSS as well). An application can have multiple components and together they are called a Module.
components have metadata that define its properties
•	selector: to describe how Angular refers to the component in templates.
•	standalone: to describe whether the component requires a NgModule.
•	imports: to describe the component's dependencies.
•	template: to describe the component's HTML markup and layout.
•	styleUrls: to list the URLs of the CSS files that the component uses in an array.
Routes
In Angular, routes are used to control the navigation between different components. Routes are defined in the RouterModule class, and they can be configured to use different components, resolvers, and canActivate guards.
To control routes, you can use route guards. Route guards are functions that are run before a route is activated. They can be used to prevent users from accessing a route if they do not have the necessary permissions.
Lazy Loading Modules
By default, NgModules are eagerly loaded. For large applications with lots of routes, consider lazy loading —a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times
To load individual modules in Angular, you can use the loadChildren property in your AppRoutingModule routes configuration. The loadChildren property takes a function that returns a promise that resolves to the module object.
Share Data between Components
1.	Method 1: Parent to Child via @Input decorator.
2.	Method 2: Child to Parent via @Output decorator and EventEmitter.
3.	Method 3: Child to Parent via @ViewChild decorator.
4.	Method 4: Unrelated Components via a Service.
Directives – Attach behavior to your HTML DOM
1.	Structural – change the structure of the HTML DOM (*ngFor)
2.	Attribute – change the behavior or look and feel of an element ([hidden])
3.	Component – customized UI Control (Own template)
Cookies cannot be shared between web browsers. Cookies, like bookmarks, are not presently synchronized. Sharing a cookie across browsers or even machines is impractical because cookies are intended to be used to correctly identify sessions in a browser.
Q: How to Add a common header to all requests coming to the Angular Application
A: Using HTTPInteceptor
Angular 18  To create and register a standalone component
ng generate component <Component-name> --standalone
NG8001: 'courses' is not a known element:
Error : 1. If 'courses' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
