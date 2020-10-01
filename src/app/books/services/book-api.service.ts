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

}
