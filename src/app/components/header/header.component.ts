import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink]
})
export class HeaderComponent {
  @Output() homeClicked = new EventEmitter<string>();

  homeClicker() {
    this.homeClicked.emit('home');
  }
}
