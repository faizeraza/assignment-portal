import { AfterViewInit, Component } from '@angular/core';
import hljs from 'highlight.js';
@Component({
  selector: 'app-assignment13',
  imports: [],
  templateUrl: './assignment13.component.html',
  styleUrl: './assignment13.component.css'
})
export class Assignment13Component implements AfterViewInit {
  ngAfterViewInit(): void {
      hljs.highlightAll();
  }
}
