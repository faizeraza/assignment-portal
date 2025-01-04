import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerServiceService } from '../../../../service/customer-service/customer-service.service';

@Component({
  selector: 'app-customer-list-view',
  imports: [NgFor, FormsModule],
  templateUrl: './customer-list-view.component.html',
  styleUrl: './customer-list-view.component.css'
})
export class CustomerListViewComponent {
  @Input() customers: any[] = [];

  constructor() {}

}
