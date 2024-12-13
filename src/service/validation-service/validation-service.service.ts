import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  validateName(name: string): string {
    if (!name.trim()) return 'Name is required.';
    if (/[^a-zA-Z\s]/.test(name)) return 'Name should not contain numbers or special characters.';
    return '';
  }

  validatePhone(phone: string): string {
    if (!phone.trim()) return 'Phone number is required.';
    if (!/^\d{10}$/.test(phone)) return 'Phone number must be 10 digits.';
    return '';
  }

  validateEmail(email: string): string {
    if (!email.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format.';
    return '';
  }

  validateUsername(username: string): string {
    if (!username.trim()) return 'Username is required.';
    return '';
  }

  validatePassword(password: string): string {
    if (!password.trim()) return 'Password is required.';
    if (password.length < 3) return 'Password must be at least 6 characters long.';
    return '';
  }
}
