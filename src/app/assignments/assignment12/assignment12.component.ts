import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assignment12',
  imports: [FormsModule,RouterLink, RouterOutlet, CommonModule],
  templateUrl: './assignment12.component.html',
  styleUrl: './assignment12.component.css'
})

export class Assignment12Component {
  value : string ='default';

  stop(event: Event){
    event.stopPropagation();  }
}
