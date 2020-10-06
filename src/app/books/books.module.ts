import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NewBookComponent } from './new-book/new-book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { GenresShowPipe } from './pipes/genres-show.pipe';

@NgModule({
  declarations: [BooksListComponent, BookDetailsComponent, NewBookComponent, BookFormComponent, UpdateBookComponent, GenresShowPipe],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewBookComponent, UpdateBookComponent],
  exports: [BooksListComponent, GenresShowPipe]
})
export class BooksModule { }
