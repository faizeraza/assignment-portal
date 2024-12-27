import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeResponse } from '../../app/employeeSystem/models/employee-response.model';
import { User } from '../../app/employeeSystem/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'http://localhost:8081/auth/addNewUser';

  register(user: User): Observable<any> {
    // console.log("I am in service!");
    return this.http.post(this.apiUrl, user,{responseType: 'text' }); 
  }
}
