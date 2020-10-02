import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bookApiService: BookApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook(): void {
    const id = this.route.snapshot.params['id'];

    this.bookApiService.getBook(id).subscribe((book) => {
      this.book = book;
    });
  }

}
