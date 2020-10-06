import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/cs-validators';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.less']
})
export class BookFormComponent {
  bookForm: FormGroup;
  @Input() book: Book;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildBookForm();
  }

  private buildBookForm() {
    if (this.book) {
      this.bookForm = this.formBuilder.group({
        ISBN: [this.book.ISBN, { validators: [Validators.required, Validators.minLength(13), Validators.maxLength(13), CustomValidators.ISBN] }],
        title: [this.book.title, { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(100)] }],
        author: [this.book.author, { validators: [Validators.required, Validators.maxLength(30)] }],
        genres: [this.book.genres.join(", "), { validators: [Validators.required] }],
        pages: [this.book.pages, { validators: [CustomValidators.pages] }],
        releaseDate: [this.book.releaseDate, { validators: [Validators.required, CustomValidators.releaseDate] }],
      })
    } else {
      this.bookForm = this.formBuilder.group({
        ISBN: ['', { validators: [Validators.required, Validators.minLength(13), Validators.maxLength(13), CustomValidators.ISBN] }],
        title: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)] }],
        author: ['', { validators: [Validators.required, Validators.maxLength(30)] }],
        genres: ['' , { validators: [Validators.required] }],
        pages: ['', { validators: [CustomValidators.pages] }],
        releaseDate: ['', { validators: [Validators.required, CustomValidators.releaseDate] }],
      })
    }
  }
 
}
