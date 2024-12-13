import { Routes } from '@angular/router';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3Component } from './assignments/assignment3/assignment3.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { Assignment5Component } from './assignments/assignment5/assignment5.component';
import { Assignment6Component } from './assignments/assignment6/assignment6.component';
import { Assignment7Component } from './assignments/assignment7/assignment7.component';
import { Assignment8Component } from './assignments/assignment8/assignment8.component';
import { ContentComponent } from './components/content/content.component';
import { AppRegisterFormComponent } from './components/registration-form/registration-form.component';
import { Assignment9Component } from './assignments/assignment9/assignment9.component';
import { Assignment10Component } from './assignments/assignment10/assignment10.component';
import { Assignment11Component } from './assignments/assignment11/assignment11.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListEmployeeComponent } from './employeeSystem/list-employee/list-employee.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
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
             { path: 'assignment9', component: Assignment9Component },
             { path: 'assignment10', component: Assignment10Component },
             { path: 'assignment11', component: Assignment11Component },
             { path: 'assignment12', component: Assignment11Component },
          ]
    }
    ,
    {
        path:'home', component:HomeComponent
    },
    {
        path:'register', component:AppRegisterFormComponent
    },
    {
        path:'login', component:LoginFormComponent
    },
    {
        path:'employees', component:ListEmployeeComponent
    },
    { path: '**', component: NotFoundComponent },
];
