import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '../../../service/validation-service/validation-service.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AppRegisterFormComponent implements OnInit {
  name = '';
  phoneNo = '';
  email = '';
  username = '';
  password = '';
  errors = {
    name: '',
    phoneNo: '',
    email: '',
    username: '',
    password: ''
  };

  constructor(private validationService: ValidationService) {}

  ngOnInit(): void {
    console.log('Registration form initialized');
  }

  validateField(fieldName: string, value: string) {
    switch (fieldName) {
      case 'name':
        this.errors.name = this.validationService.validateName(value);
        break;
      case 'phoneNo':
        this.errors.phoneNo = this.validationService.validatePhone(value);
        break;
      case 'email':
        this.errors.email = this.validationService.validateEmail(value);
        break;
      case 'username':
        this.errors.username = this.validationService.validateUsername(value);
        break;
      case 'password':
        this.errors.password = this.validationService.validatePassword(value);
        break;
    }
  }

  register() {
    this.validateField('name', this.name);
    this.validateField('phoneNo', this.phoneNo);
    this.validateField('email', this.email);
    this.validateField('username', this.username);
    this.validateField('password', this.password);

    if (Object.values(this.errors).every(err => err === '')) {
      alert('Registration successful');
      this.clearForm();
    } else {
      // alert('Please correct the errors');
    }
  }

  clearForm() {
    this.name = '';
    this.phoneNo = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.errors = {
      name: '',
      phoneNo: '',
      email: '',
      username: '',
      password: ''
    };
  }
}
