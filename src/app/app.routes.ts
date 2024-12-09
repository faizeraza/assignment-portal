import { Routes } from '@angular/router';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3Component } from './assignments/assignment3/assignment3.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { Assignment5Component } from './assignments/assignment5/assignment5.component';
import { Assignment6Component } from './assignments/assignment6/assignment6.component';
import { Assignment7Component } from './assignments/assignment7/assignment7.component';
import { Assignment8Component } from './assignments/assignment8/assignment8.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
    {
        path:'assignments',
        component: ContentComponent,
        children:
        [
            { path: 'assignment1', component: Assignment1Component  },
             { path: 'assignment2', component: Assignment2Component },
             { path: 'assignment3', component: Assignment3Component },
             { path: 'assignment4', component: Assignment4Component },
             { path: 'assignment5', component: Assignment5Component },
             { path: 'assignment6', component: Assignment6Component },
             { path: 'assignment7', component: Assignment7Component },
             { path: 'assignment8', component: Assignment8Component },
          ]
    }
    ,
    {
        path:'home', component:HomeComponent
    }
];
