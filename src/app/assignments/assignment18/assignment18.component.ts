import { Component } from '@angular/core';
import { DirectiveDemoIfComponent } from '../assignment17/directive-demo-if/directive-demo-if.component';
import { DirectiveDemoSwitchComponent } from '../assignment17/directive-demo-switch/directive-demo-switch.component';
import { DirectiveDemoForComponent } from './directive-demo-for/directive-demo-for.component';

@Component({
  selector: 'app-assignment18',
  imports: [DirectiveDemoForComponent],
  templateUrl: './assignment18.component.html',
  styleUrl: './assignment18.component.css'
})
export class Assignment18Component {

}
