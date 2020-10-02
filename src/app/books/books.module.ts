import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NewBookComponent } from './new-book/new-book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksListComponent, BookDetailsComponent, NewBookComponent, BookFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewBookComponent],
  exports: [BooksListComponent]
})
export class BooksModule { }
