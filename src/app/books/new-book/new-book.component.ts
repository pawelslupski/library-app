import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.less']
})
export class NewBookComponent {
  @ViewChild("bookFormRef") bookFormRef: BookFormComponent;

  constructor(private dialogRef: MatDialogRef<NewBookComponent>,
              private bookApiService: BookApiService,
              private toast: MatSnackBar) { }

  createBook() {
    try {
      this.bookApiService.addBook(this.bookFormRef.bookForm.value);
      this.onCreatingSuccess();
    } catch(e) { 
      this.onCreatingFailure(e);
    }
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open('Book has been created!', '', { panelClass: 'toast-success' });
  }

  private onCreatingFailure(e) {
    this.toast.open(e.message(), '', { panelClass: 'toast-error' });
  }

}
