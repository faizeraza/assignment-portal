import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment23',
  imports: [CommonModule],
  templateUrl: './assignment23.component.html',
  styleUrl: './assignment23.component.css'
})
export class Assignment23Component {
  title = 'Angular Pipe Demo';
  
  // Defining properties for demonstrating pipes
  amount: number = 12345.6789;
  percentage: number = 0.87;
  date: string = '2024-12-30T14:48:00';
  text: string = 'hello world';
  currencyValue: number = 500;
}
