import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `
    <div class="scrollable-content">
      <p>
        Angular is a platform and framework for building single-page client applications using HTML and TypeScript. 
        Developed and maintained by Google, it was initially released in 2010 as AngularJS and later rewritten to Angular (version 2 and above) 
        to improve performance and scalability. Angular provides a powerful set of tools for building dynamic and responsive web applications.
        It uses a component-based architecture, allowing developers to create reusable UI elements. Angular also has built-in support for forms, 
        HTTP client services, and routing. One of its standout features is its use of two-way data binding, which simplifies synchronization between 
        the model and the view. Angular is widely used for building enterprise-level applications and has an extensive ecosystem with a wide 
        range of third-party libraries and tools that make development faster and easier.
      </p>
    </div>
  `,
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {}
