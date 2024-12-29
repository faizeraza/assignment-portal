import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment16',
  imports: [FormsModule,NgIf],
  templateUrl: './assignment16.component.html',
  styleUrl: './assignment16.component.css'
})
export class Assignment16Component {
  n1: number | null = null;
  n2: number | null = null;
  result: number | null = null;

  addNumbers(event: Event) {
    this.stop(event);
    if (this.n1 !== null && this.n2 !== null) {
      this.result = this.n1 + this.n2;
    }
  }

  resetForm(event : Event) {
    this.stop(event);
    this.n1 = null;
    this.n2 = null;
    this.result = null;
  }
  
  stop(event: Event){
    event.stopPropagation();  
  }
}
