import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environmet';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink]
})
export class HeaderComponent {
  logout() {
    localStorage.clear();
    console.log("storage cleared!!");
    window.location.href = '/home';
  }
  displayPath = environment.displayPictureUrl;
  // @Output() clicked = new EventEmitter<string>();

  // homeClicker() {
  //   this.clicked.emit('home');
  // }

  // assignmentClicker() {
  //   this.clicked.emit('assignment1');
  // }
}
