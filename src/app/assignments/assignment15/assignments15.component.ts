import { Component } from '@angular/core';
import { AngularComponent } from './angular/angular.component';
import { JavaComponent } from './java/java.component';
import { SQLComponent } from './sql/sql.component';
import { NgClass, NgComponentOutlet, NgFor } from '@angular/common';

@Component({
  selector: 'app-assignment15',
  imports: [JavaComponent, AngularComponent, SQLComponent],
  templateUrl: './assignments15.component.html',
  styleUrl: './assignments15.component.css'
})
export class Assignment15Component {
  tabs = [
    { id: 'java', title: 'Java', component: JavaComponent },
    { id: 'angular', title: 'Angular', component: AngularComponent },
    { id: 'sql', title: 'SQL', component: SQLComponent }
  ];

  // Default active tab
  activeTab = this.tabs[0].id;

  // Function to select tab and update active component
  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  stop(event: Event){
    event.stopPropagation();  
  }
}
