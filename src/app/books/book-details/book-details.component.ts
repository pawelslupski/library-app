import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  selectedUser: string;

  constructor(private bookApiService: BookApiService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private toast: MatSnackBar) { }

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
      isBorrowed: this.book.isBorrowed ? 'no' : 'yes',
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

  selectChangeHandler (event: any) {
    event.preventDefault();
    this.selectedUser = event.target.value;
  }

  borrowTheBook(book) {
    const bookToBeBorrowed = Object.assign({}, book);
    const clientCredsArray = this.selectedUser.split(' ');
    bookToBeBorrowed.clientFirstName = clientCredsArray[0];
    bookToBeBorrowed.clientLastName = clientCredsArray[1];
    bookToBeBorrowed.isBorrowed = true;
    this.updateBook(book.id, bookToBeBorrowed);     
  }

  updateBook(id: number, book: Book) {
    try {
      this.bookApiService.updateBook(id, book);
      this.onUpdatingSuccess();
    } catch(e) { 
    this.onUpdatingFailure(e);
    } 
  }

  private onUpdatingSuccess() {
    this.toast.open('Book has been borrowed!', '', { panelClass: 'toast-success' });
  }

  private onUpdatingFailure(e) {
    this.toast.open(e.message(), '', { panelClass: 'toast-error' });
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
