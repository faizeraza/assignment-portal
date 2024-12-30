import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment21',
  imports: [FormsModule,NgIf],
  templateUrl: './assignment21.component.html',
  styleUrl: './assignment21.component.css'
})
export class Assignment21Component {
  year!: number;
  isLeapYear: string = '';
  numberOfDays: number = 0;
  totalHolidays: number = 0;

  calculateDetails(): void {
    if (!this.year || this.year < 1) {
      alert('Please enter a valid year.');
      return;
    }

    // Check if the year is a leap year
    this.isLeapYear = (this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0)) ? 'Yes' : 'No';

    // Number of days in the year
    this.numberOfDays = this.isLeapYear === 'Yes' ? 366 : 365;

    // Calculate total weekends
    this.totalHolidays = this.calculateHolidays();
  }

  calculateHolidays(): number {
    let holidays = 0;
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(this.year, month + 1, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(this.year, month, day);
        const dayOfWeek = date.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          holidays++; // Sundays (0) and Saturdays (6)
        }
      }
    }
    return holidays;
  }
}
