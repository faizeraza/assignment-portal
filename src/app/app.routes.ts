import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'assignment1', 
        loadComponent:() => {
            return import ('./assignments/assignment1/assignment1.component').then((m)=> m.Assignment1Component);
        }
     },
     { path: 'assignment2', 
        loadComponent:() => {
            return import ('./assignments/assignment2/assignment2.component').then((m)=> m.Assignment2Component);
        }
     },
     { path: 'assignment3', 
        loadComponent:() => {
            return import ('./assignments/assignment3/assignment3.component').then((m)=> m.Assignment3Component);
        }
     },
     { path: '', 
        pathMatch: 'full',
        loadComponent:() => {
            return import ('./home/home.component').then((m)=> m.HomeComponent);
        }
     } // Default route
  ];
