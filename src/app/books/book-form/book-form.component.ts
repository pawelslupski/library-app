import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.less']
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildBookForm();
  }

  private buildBookForm() {
    this.bookForm = this.formBuilder.group({
      ISBN: ['', { validators: [Validators.required, Validators.minLength(13), Validators.maxLength(13)] }],
      title: ['', { validators: [Validators.required] }],
      author: ['', { validators: [Validators.required] }],
      genres: ['', { validators: [Validators.required] }],
      pages: ['', { validators: [Validators.required] }],
      releaseDate: ['', { validators: [Validators.required] }],
    })
  }

}
