import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';

@Component({
  selector: 'app-assignment6',
  imports: [NgIf],
  templateUrl: './assignment7.component.html',
  styleUrl: './assignment7.component.css'
})
export class Assignment7Component {
  username: string = 'Faizan Raza';
  profileImg: string = './assets/image/profile.png';
  showProfile: boolean = false;
  showreset: boolean = false;

  constructor(private logger: LoggerService){
    this.logger.log("Using a logger service");
  }
  
  displayProfile(): void {
    this.showProfile = true; 
    this.showreset = true

  }

  reset(): void {
    this.showProfile = false; 
    this.showreset = false;
  }
}
