import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-demo-switch',
  imports: [FormsModule,NgSwitchCase,NgIf, NgSwitch],
  templateUrl: './directive-demo-switch.component.html',
  styleUrl: './directive-demo-switch.component.css'
})

export class DirectiveDemoSwitchComponent {
  number: number | null = null;
  result: 'even' | 'odd' | null = null;

  findEvenOdd() {
    if (this.number !== null) {
      this.result = this.number % 2 === 0 ? 'even' : 'odd';
    }
  }
}
