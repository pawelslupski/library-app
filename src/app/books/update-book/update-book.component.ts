import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookFormComponent } from '../book-form/book-form.component';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.less']
})
export class UpdateBookComponent {
  @ViewChild("bookFormRef") bookFormRef: BookFormComponent;
  book: Book;

  constructor(private dialogRef: MatDialogRef<UpdateBookComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Book,
    private bookApiService: BookApiService,
    private toast: MatSnackBar) {
      this.book = data;
    }

    updateBook() {
      try {
        this.bookFormRef.bookForm.value.genres = this.bookFormRef.bookForm.value.genres.split(", ");
        this.bookApiService.updateBook(this.book.id, this.bookFormRef.bookForm.value);
        this.onUpdatingSuccess();
      } catch(e) { 
        this.onUpdatingFailure(e);
      }
    }

    private onUpdatingSuccess() {
      this.dialogRef.close();
      this.toast.open('Book has been updated!', '', { panelClass: 'toast-success' });
    }

    private onUpdatingFailure(e) {
      this.toast.open(e.message(), '', { panelClass: 'toast-error' });
    }

}
