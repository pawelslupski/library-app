import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {
  books: Book[];

  constructor(private bookApiService: BookApiService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookApiService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

}
