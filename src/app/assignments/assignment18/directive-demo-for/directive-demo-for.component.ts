import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-directive-demo-for',
  imports: [NgFor],
  templateUrl: './directive-demo-for.component.html',
  styleUrl: './directive-demo-for.component.css'
})
export class DirectiveDemoForComponent {
  books: Book[] = [
    { title: 'Book 1', description: 'This is the description of Book 1.' },
    { title: 'Book 2', description: 'This is the description of Book 2.' },
    { title: 'Book 3', description: 'This is the description of Book 3.' },
    { title: 'Book 4', description: 'This is the description of Book 4.' }
  ];
}
