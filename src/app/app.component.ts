import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidebarComponent, HeaderComponent, RouterOutlet]
})
export class AppComponent {
  sidebarVisible: boolean = true; // Default state
  isFlipped: boolean = false;
  cardContent: string = 'Back Side Content';

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
    this.cardContent = this.isFlipped ? 'You have flipped the card!' : 'Back Side Content';
  }
}
