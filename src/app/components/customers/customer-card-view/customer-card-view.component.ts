import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TopHeaderComponent } from '../top-header/top-header.component';
import * as customerData from '../../../../assets/customer-data.json';

@Component({
  selector: 'app-customer-card-view',
  imports: [NgFor],
  templateUrl: './customer-card-view.component.html',
  styleUrl: './customer-card-view.component.css'
})
export class CustomerCardViewComponent {
  @Input() customers: any[] = [];

  constructor(){
    // console.log("customers:  "+this.customers);
  }
}
