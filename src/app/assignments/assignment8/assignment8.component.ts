import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges, 
  NgModule} from '@angular/core';
import { NgFor } from '@angular/common';
import { LoggerService } from '../../../service/logger/logger.service';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './assignment8.component.html',
  styleUrls: ['./assignment8.component.css'],
  imports: [NgFor]
})
export class Assignment8Component implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy 
  {

    data:string = new Date().toLocaleTimeString();
    lifecycleMessages: string[]= [];


    constructor(private logger: LoggerService) {
      this.logLifecycle('Constructor is called');
    }

    ngOnChanges() {
      this.logLifecycle('ngOnChanges is called');
    }

    ngOnInit() {
      this.logLifecycle('ngOnInit is called');
    }

    ngDoCheck() {
      this.logLifecycle('ngDoCheck is called');
    }

    ngAfterContentInit() {
      this.logLifecycle('ngAfterContentInit is called');
    }

    ngAfterContentChecked() {
      this.logLifecycle('ngAfterContentChecked is called');
    }

    ngAfterViewInit() {
      this.logLifecycle('ngAfterViewInit is called');
    }

    ngAfterViewChecked() {
      this.logLifecycle('ngAfterViewChecked is called');
    }

    ngOnDestroy() {
      this.lifecycleMessages = []
      this.logLifecycle('ngOnDestroy is called');
    }

    private logLifecycle(message: string) {
      this.lifecycleMessages.push(message); // Add the message to the array
      this.logger.log(message); // Log the message to the console
    }

    updateData(event:Event): void {
      this.data = 'Updated at ' + new Date().toLocaleTimeString();
      event.stopPropagation();
    }

}
