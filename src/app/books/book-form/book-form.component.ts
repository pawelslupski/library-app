import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/cs-validators';

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
      ISBN: ['', { validators: [Validators.required, Validators.minLength(13), Validators.maxLength(13), CustomValidators.ISBN] }],
      title: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)] }],
      author: ['', { validators: [Validators.required, Validators.maxLength(30)] }],
      genres: ['' , { validators: [Validators.required] }],
      pages: ['', { validators: [CustomValidators.pages] }],
      releaseDate: ['', { validators: [Validators.required, CustomValidators.releaseDate] }],
    })
  }
 
}
