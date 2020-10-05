import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;

  constructor(private bookApiService: BookApiService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.loadBook();
  }

  buildBookForm() {
    return this.formBuilder.group({
      id: this.book.id,
      ISBN: this.book.ISBN,
      title: this.book.title,
      author: this.book.author,
      genres: this.book.genres.join(', '),
      pages: this.book.pages,
      releaseDate: this.book.releaseDate,
      isBorrowed: this.book.isBorrowed,
      clientFirstName: this.book.clientFirstName,
      clientLastName: this.book.clientLastName
    });
  }

  loadBook(): void {
    const id = this.route.snapshot.params['id'];

    this.bookApiService.getBook(id).subscribe((book) => {
      this.book = book;
      this.bookForm = this.buildBookForm();
    });
  }

}
