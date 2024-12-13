import { Component } from '@angular/core';
import { ValidationService } from '../../../service/validation-service/validation-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../service/login/login-service.service';
import { User } from '../../employeeSystem/models/user.model';
import { environment } from '../../environments/environmet';
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

  constructor(private validationService: ValidationService, private loginService : LoginService) {}

  login() {
    this.validateField('username', this.username);
    this.validateField('password', this.password);
    let user : User  = new User(this.username,this.password);
    if (Object.values(this.errors).every(err => err === '')) {
      this.loginService.authorize(user).subscribe((response) =>{
        console.log(response.data);
        localStorage.setItem('Authorization',`${response.data}`)
        environment.auth_token = response.data;
        console.log(environment.auth_token);
      })
      alert()
      this.clearForm();
    } else {
      alert('Please correct the errors');
    }
  }

  clearForm() {

  }
}
