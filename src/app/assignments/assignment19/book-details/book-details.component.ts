import { Component, Input, input } from '@angular/core';
import { Book } from '../../../components/model/Book';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() book!: Book;
}
