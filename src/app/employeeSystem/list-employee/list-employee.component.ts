import { Component } from '@angular/core';
import { ListEmployeeService } from '../../../service/employeeServices/list-employees.service';
import { Employee } from '../models/employee.modle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  imports: [CommonModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  employees: Employee []  = []; // Array to store employee data
  isAuthorized: boolean = false;

  constructor(private listemployeeService : ListEmployeeService) {}

  ngOnInit(): void {
       this.getEmployees();
  }

  getEmployees(): void {
    this.listemployeeService.getAllPosts().subscribe( (response) => {
      console.log(response.data);
      this.employees = response.data;
      console.log(this.employees);
      this.isAuthorized = true;
      }
    );
  }
}
