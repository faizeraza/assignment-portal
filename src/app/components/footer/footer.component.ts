import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environmet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  releaseVersion = environment.appVersion;
  releaseDate = environment.appReleaseDate;

  ngOnInit(): void {
    console.log('Footer component initialized');
  }
}
