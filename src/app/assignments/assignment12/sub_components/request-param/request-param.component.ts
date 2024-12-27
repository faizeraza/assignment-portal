import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-request-param',
  imports: [],
  templateUrl: './request-param.component.html',
  styleUrl: './request-param.component.css'
})
export class RequestParamComponent {
  name: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the parameter from the URL
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name'); // Extract 'name' parameter
    });
  }
}
