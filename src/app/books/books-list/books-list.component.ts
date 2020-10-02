import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../models/book';
import { NewBookComponent } from '../new-book/new-book.component';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {
  books: Book[];

  constructor(private bookApiService: BookApiService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookApiService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  openNewBokModal() {
    this.dialog.open(NewBookComponent);
  }

}
