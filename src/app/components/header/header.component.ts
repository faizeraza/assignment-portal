import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environmet';
import { LoginFormComponent } from '../login-form/login-form.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink, CommonModule]
})
export class HeaderComponent implements OnInit {
  constructor(){}
  isLoggedIn = localStorage.getItem("loggedIn");
  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("loggedIn");
    console.log("isLoggedIn"+ this.isLoggedIn);
  }

  logout() {
    localStorage.clear();
    console.log("storage cleared!!");
    window.location.href = '/home';
    localStorage.setItem('loggedIn',`${false}`);
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
