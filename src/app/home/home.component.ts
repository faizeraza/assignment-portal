import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `<div class="welcome-content">
                <h1 class="welcome-heading">Welcome to Assignments</h1>
                <p class="welcome-subheading">Enjoy!</p>
             </div>`,
  styles: `        
        .welcome-content {
          animation: slideIn 1s ease-out;
          width: fit-content;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1); /* Adds subtle transparency */
          padding: 20px;
        }
        
        .welcome-heading {
          font-size: 3rem;
          font-weight: bold;
          margin: 20px 0;
        }
        
        .welcome-subheading {
          font-size: 1.5rem;
          margin: 10px 0;
        }
        
      `
})
export class HomeComponent {

}
