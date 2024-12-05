import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { QuestionMapperService } from './service/question-mapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, NgIf]
})
export class AppComponent {
  sidebarVisible: boolean = true; // Default state
  isFlipped: boolean = false;
  cardContent: string = '';

  constructor(private questionService: QuestionMapperService){}

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
    // this.cardContent = this.isFlipped ? 'You have flipped the card!' : this.cardContent;
  }

  onAssignmentNumberSelected(assignment: string): void {
    this.questionService.getAnswer(assignment).subscribe(
      (response) => {
        this.cardContent = response;
        console.log("zuiii: "+this.cardContent);
      }
    );
  }
}
