import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { Book } from '../models/book';
import { BOOKS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  getBooks(): Observable<Book[]> {
    return of(BOOKS).pipe(delay(1000));
  }

  getBook(id: number): Observable<Book> {
    return of(BOOKS.find(book => book.id == id)).pipe(delay(1000));
  }

  addBook(book: Book): void {
    BOOKS.push(book);
  }

  deleteBook(id: number): void {
    BOOKS.splice(BOOKS.findIndex(book => book.id == id), 1);
  }

  updateBook(id: number, book: Book): void {
    book.id = id;
    BOOKS.splice(BOOKS.findIndex(book => book.id == id), 1, book);
  }
}
