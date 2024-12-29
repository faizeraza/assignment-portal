import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-demo-if',
  imports: [FormsModule,NgIf],
  templateUrl: './directive-demo-if.component.html',
  styleUrl: './directive-demo-if.component.css'
})

export class DirectiveDemoIfComponent {
  number: number | null = null;
  isEven: boolean | null = null;

  findEvenOdd() {
    if (this.number !== null) {
      this.isEven = this.number % 2 === 0;
    }
  }
}
