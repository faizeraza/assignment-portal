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
     { path: 'assignment4', 
        loadComponent:() => {
            return import ('./assignments/assignment4/assignment4.component').then((m)=> m.Assignment4Component);
        }
     },
     { path: 'assignment5', 
        loadComponent:() => {
            return import ('./assignments/assignment5/assignment5.component').then((m)=> m.Assignment5Component);
        }
     },
     { path: 'assignment6', 
        loadComponent:() => {
            return import ('./assignments/assignment6/assignment6.component').then((m)=> m.Assignment6Component);
        }
     },
     { path: 'assignment7', 
        loadComponent:() => {
            return import ('./assignments/assignment7/assignment7.component').then((m)=> m.Assignment7Component);
        }
     },
     { path: 'assignment8', 
        loadComponent:() => {
            return import ('./assignments/assignment8/assignment8.component').then((m)=> m.Assignment8Component);
        }
     },
     { path: '', 
        pathMatch: 'full',
        loadComponent:() => {
            return import ('./home/home.component').then((m)=> m.HomeComponent);
        }
     } // Default route
  ];
