import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment22',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './assignment22.component.html',
  styleUrl: './assignment22.component.css'
})
export class Assignment22Component {
  rows: number = 0;
  character: string = '*';
  pyramid: string[] = [];

  generatePyramid(): void {
    if (this.rows < 1) {
      alert('Please enter a positive number.');
      return;
    }

    this.pyramid = [];
    for (let i = 0; i < this.rows; i++) {
      const spaces = '&nbsp;'.repeat(this.rows - i - 1); // Dynamic spacing
      const stars = this.generatestring(2*i + 1); // print clockwise string per row
      this.pyramid.push(`${spaces}${stars}${spaces}`); // Combine spaces and stars
    }
  }
  generatestring(currentrow: number){
    let index: number = 0;
    let currentstr: string = '';
    for (let i = 0; i< currentrow; i++){
      if(index < this.character.length){
        currentstr = currentstr+this.character[index]
        index++;
      }
      else{
        index=0;
      }
    }
    return currentstr;
  }
}
