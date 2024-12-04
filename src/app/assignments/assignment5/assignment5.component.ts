import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  imports: [],
  templateUrl: './assignment5.component.html',
  styleUrl: './assignment5.component.css'
})
export class Assignment5Component {
  username: string = 'Faizan Raza';
  profileImg: string = './assets/image/profile.png';
}
