import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../app/employeeSystem/models/user.model';
import { EmployeeResponse } from '../../app/employeeSystem/models/employee-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  apiUrl: string = 'http://localhost:8081/auth/generateToken';

  authorize(user: User): Observable<EmployeeResponse> {
    // console.log("I am in service!");
    return this.http.post<EmployeeResponse>(this.apiUrl, user);
  }
}
