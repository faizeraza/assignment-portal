import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { AppRegisterFormComponent } from './components/registration-form/registration-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListEmployeeComponent } from './employeeSystem/list-employee/list-employee.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Assignment27Component } from './assignments/assignment27/assignment27.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: AppRegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'employees', component: ListEmployeeComponent },
    { path: 'customers', component: Assignment27Component},  
    // Lazy-loaded children module
    {
      path: 'assignments',
      component: ContentComponent,
      loadChildren: () =>
        import('./assignments/assignments.module').then((m) => m.AssignmentsModule),
    },
    { path: '**', component: NotFoundComponent },
  ];
