import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment10Component } from './assignment10/assignment10.component';
import { Assignment11Component } from './assignment11/assignment11.component';
import { Assignment12Component } from './assignment12/assignment12.component';
import { PathVariableComponent } from './assignment12/sub_components/path-variable/path-variable.component';
import { RequestParamComponent } from './assignment12/sub_components/request-param/request-param.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { Assignment7Component } from './assignment7/assignment7.component';
import { Assignment8Component } from './assignment8/assignment8.component';
import { Assignment9Component } from './assignment9/assignment9.component';
import { Assignment13Component } from './assignment13/assignment13.component';
import { Assignment14Component } from './assignment14/assignments14.component';
import { Assignment15Component } from './assignment15/assignments15.component';
import { Assignment16Component } from './assignment16/assignment16.component';
import { Assignment17Component } from './assignment17/assignment17.component';
import { Assignment18Component } from './assignment18/assignment18.component';
import { Assignment19Component } from './assignment19/assignment19.component';
import { Assignment20Component } from './assignment20/assignment20.component';

const routes: Routes = [
     { path: 'assignment1', component: Assignment1Component },
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
     { path: 'assignment12', 
       component: Assignment12Component,
       children:
       [
        { path: 'first', component: RequestParamComponent }, 
        { path: 'second/:id', component: PathVariableComponent },
       ]
     },
     { path: 'assignment13', component: Assignment13Component },
     { path: 'assignment14', component: Assignment14Component },
     { path: 'assignment15', component: Assignment15Component },
     { path: 'assignment16', component: Assignment16Component },
     { path: 'assignment17', component: Assignment17Component },
     { path: 'assignment18', component: Assignment18Component },
     { path: 'assignment19', component: Assignment19Component },
     { path: 'assignment20', component: Assignment20Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AssignmentsRoutingModule { }
