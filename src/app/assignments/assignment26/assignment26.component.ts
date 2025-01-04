import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../components/customers/top-header/top-header.component";
import { CustomerListViewComponent } from '../../components/customers/customer-list-view/customer-list-view.component';
import { FormsModule } from '@angular/forms';
import { CustomerServiceService } from '../../../service/customer-service/customer-service.service';
import { CustomerCardViewComponent } from "../../components/customers/customer-card-view/customer-card-view.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-assignment26',
  imports: [CustomerListViewComponent, TopHeaderComponent, FormsModule, CustomerCardViewComponent, NgIf],
  templateUrl: './assignment26.component.html',
  styleUrl: './assignment26.component.css'
})
export class Assignment26Component {
  customers: any[] = [];
  filterText: string = '';
  currentView: 'card' | 'list' = 'list'; // Default view

  constructor(private customerService: CustomerServiceService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.loadCustomers();
  }

  setView(view: 'card' | 'list'): void {
    this.currentView = view;
  }

  filteredCustomers(): any[] {
    return  this.customerService.filteredCustomers(this.filterText);
  }
}
