import { Component, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-path-variable',
  imports: [],
  templateUrl: './path-variable.component.html',
  styleUrl: './path-variable.component.css'
})
export class PathVariableComponent {
  id: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the 'id' parameter from the URL
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id'); // Extract 'id' parameter
    });
  }
}
