import { Component } from '@angular/core';
import { CustomerCardViewComponent } from '../../components/customers/customer-card-view/customer-card-view.component';
import { CustomerServiceService } from '../../../service/customer-service/customer-service.service';
import { FormsModule } from '@angular/forms';
import { TopHeaderComponent } from "../../components/customers/top-header/top-header.component";

@Component({
  selector: 'app-assignment25',
  imports: [CustomerCardViewComponent, FormsModule, TopHeaderComponent],
  templateUrl: './assignment25.component.html',
  styleUrl: './assignment25.component.css'
})
export class Assignment25Component {
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
