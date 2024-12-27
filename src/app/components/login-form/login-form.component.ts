import { Component } from '@angular/core';
import { ValidationService } from '../../../service/validation-service/validation-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../service/login/login-service.service';
import { User } from '../../employeeSystem/models/user.model';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  
  username = '';
  password = '';
  token = '';
  errors = {
    username: '',
    password: ''
  }
  
  constructor(private validationService: ValidationService, private loginService : LoginService) {}

  validateField(fieldName: string, value: string) {
    switch (fieldName) {
      case 'username':
        this.errors.username = this.validationService.validateUsername(value);
        break;
      case 'password':
        this.errors.password = this.validationService.validatePassword(value);
        break;
    }
  }

  login() {
    this.validateField('username', this.username);
    this.validateField('password', this.password);
    let user : User  = new User(this.username,this.password);
    if (Object.values(this.errors).every(err => err === '')) {
      this.loginService.authorize(user).subscribe((response) =>{
        // console.log(response.data);
        localStorage.setItem('Authorization',`${response.data}`)
        localStorage.setItem('loggedIn',`${true}`);
        console.log("loggedIn on login clicked: "+localStorage.getItem("loggedIn"));
        window.location.href = '/employees';
      })
      this.clearForm();
    } else {
      alert('Please correct the errors');
    }
  }

  clearForm() {
    this.username = '';
    this.password = '';
  }
}
