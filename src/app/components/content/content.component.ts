import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionMapperService } from '../../service/questionsService/question-mapper.service';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-content',
  imports: [SidebarComponent, RouterOutlet, NgIf],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  sidebarVisible: boolean = true; // Default state
  isFlipped: boolean = false;
  cardContent: string = 'Select Any Assignment!';

  constructor(private questionService: QuestionMapperService){}

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
    // this.cardContent = this.isFlipped ? 'You have flipped the card!' : this.cardContent;
  }

  
  onAssignmentNumberSelected(assignment: string): void {
    console.log("zuiii: "+assignment);
    this.questionService.getAnswer(assignment).subscribe(
      (response) => {
        this.cardContent = response;
        console.log("zuiii: "+this.cardContent);
      }
    );
  }
}
