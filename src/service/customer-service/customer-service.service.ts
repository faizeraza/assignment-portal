import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customers: any[] = [];

  constructor(private http: HttpClient) { }

  loadCustomers(): any[] {
    this.http.get<any>('./assets/customer-data.json').subscribe((data) => {
      this.customers = data.customers.map((customer: any) => {
        const [city, state] = customer.address.split(',');
        return {
          ...customer,
          city: city.trim(),
          state: state.trim(),
        };
      });
    });
    return this.customers;
  }

  filteredCustomers(filterText: string): any[] {
    if (!filterText) return this.customers;
    return this.customers.filter((customer) =>
      customer.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

}
