import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterLink]
})
export class SidebarComponent implements OnInit {
  @Output() assignmentNumber = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const assignment = this.extractAssignmentNumber(event.url);
        if (assignment) {
          this.assignmentNumber.emit(assignment);
          console.log(`RouterLink clicked: ${assignment}`);
        }
      }
    });
  }

  private extractAssignmentNumber(url: string): string | null {
    const match = url.match(/\/assignment(\d+)/);
    return match ? match[1] : null; // Extracts the number from the URL if it matches the pattern
  }
}
