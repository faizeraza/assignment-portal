import { Component } from '@angular/core';
import { DirectiveDemoIfComponent } from '../../components/directive-demo-if/directive-demo-if.component';
import { DirectiveDemoSwitchComponent } from '../../components/directive-demo-switch/directive-demo-switch.component';

@Component({
  selector: 'app-assignment17',
  imports: [DirectiveDemoIfComponent,DirectiveDemoSwitchComponent],
  templateUrl: './assignment17.component.html',
  styleUrl: './assignment17.component.css'
})
export class Assignment17Component {

}
