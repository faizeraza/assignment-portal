import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Book } from '../../../components/model/Book';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() book!: Book;
  @Output() rateBook: EventEmitter<{title : string, rating: number}> =  new EventEmitter();

  generateRating(): void{
    const randomRating = Math.floor(Math.random() * 10) + 1; // Generate random rating between 1-10
    this.rateBook.emit({ title: this.book.title, rating: randomRating }); // Emit the rating and title
  }
}
