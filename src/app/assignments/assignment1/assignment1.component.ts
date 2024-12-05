import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment1',
  imports: [CommonModule],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css',
  standalone: true
})
export class Assignment1Component implements OnInit{
  constructor(private logger: LoggerService){

  }

  ngOnInit(): void {
      this.logger.log('Assignment 1 component initialized');
  }
}
