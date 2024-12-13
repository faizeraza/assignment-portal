import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeResponse } from '../../app/employeeSystem/models/employee-response.model';
import { environment } from '../../app/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class ListEmployeeService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'http://localhost:8081/myhr/employees';
  token: string = 'Bearer '+localStorage.getItem("Authorization");
  getAllPosts(): Observable<EmployeeResponse> {
    console.log("Token for " +this.token);
    const headers = new HttpHeaders({
      'Authorization':  this.token// Add the Authorization header with the token
    });
    // console.log("I am in service!");
    return this.http.get<EmployeeResponse>(this.apiUrl, {headers});
  }
}
