import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, RouterOutlet, FooterComponent, NgIf]
})
export class AppComponent{
  isCustomerClicked = false;

  constructor(private router: Router){}

  customerClicked(isClicked: boolean){
    console.log("isClicked: "+isClicked);
    this.isCustomerClicked = isClicked;
  }

}
