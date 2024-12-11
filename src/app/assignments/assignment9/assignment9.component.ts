import { Component } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';

@Component({
  selector: 'app-assignment9',
  imports: [],
  templateUrl: './assignment9.component.html',
  styleUrl: './assignment9.component.css'
})
export class Assignment9Component {
  constructor(private logger: LoggerService){
    this.logger.log("Using a logger service");
  }
}
