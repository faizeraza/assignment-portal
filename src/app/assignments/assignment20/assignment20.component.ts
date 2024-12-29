import { Component } from '@angular/core';
import { Book } from '../assignment18/model/Book';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-assignment20',
  imports: [BookDetailsComponent,NgFor],
  templateUrl: './assignment20.component.html',
  styleUrl: './assignment20.component.css'
})
export class Assignment20Component {
  books: Book[] = [
    { title: 'Book 1', description: 'This is the description of Book 1.' },
    { title: 'Book 2', description: 'This is the description of Book 2.' },
    { title: 'Book 3', description: 'This is the description of Book 3.' },
    { title: 'Book 4', description: 'This is the description of Book 4.' }
  ];

  handleRating(event: { title: string; rating: number }): void {
    alert(`Rating for ${event.title} is ${event.rating}`); // Display an alert with the title and rating
  }
}
