import { Component } from '@angular/core';
import { Book } from '../../components/model/Book';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-assignment19',
  imports: [BookDetailsComponent,NgFor],
  templateUrl: './assignment19.component.html',
  styleUrl: './assignment19.component.css'
})
export class Assignment19Component {
  books: Book[] = [
    { title: 'Book 1', description: 'This is the description of Book 1.', path: "assets/book/book1.jpg" },
    { title: 'Book 2', description: 'This is the description of Book 2.', path: "assets/book/book2.jpg" },
    { title: 'Book 3', description: 'This is the description of Book 3.', path: "assets/book/book3.jpg" },
    { title: 'Book 4', description: 'This is the description of Book 4.', path: "assets/book/book1.jpg" }
  ];
}
