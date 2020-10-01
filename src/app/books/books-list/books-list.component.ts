import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [
    {
      id: 1,
      ISBN: '83-08-01587-5',
      title: 'Misery',
      author: 'Stephen King',
      genres: ['thriller', 'horror','novel'],
      pages: 420,
      releaseDate: '31-12-1990',
      isBorrowed: false,
      clientFirstName: '',
      clientLastName: ''
    },
    {
      id: 2,
      ISBN: '84-22-05687-2',
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      genres: ['thriller', 'novel'],
      pages: 489,
      releaseDate: '18-03-2003',
      isBorrowed: false,
      clientFirstName: '',
      clientLastName: ''
    },
    {
      id: 3,
      ISBN: '84-22-05687-5',
      title: 'Deception Point',
      author: 'Dan Brown',
      genres: ['sci-fi', 'novel', 'thriller', 'suspense'],
      pages: 372,
      releaseDate: '19-04-2001',
      isBorrowed: false,
      clientFirstName: '',
      clientLastName: ''
    },
    {
      id: 4,
      ISBN: '82-25-05696-2',
      title: 'Harry Potter and the deathly hallows ',
      author: 'J.K. Rowling',
      genres: ['novel', 'suspense', 'crime novel'],
      pages: 607,
      releaseDate: '21-07-2007',
      isBorrowed: false,
      clientFirstName: '',
      clientLastName: ''
    },
    {
      id: 5,
      ISBN: '89-22-05687-9',
      title: 'Angels and demons',
      author: 'Dan Brown',
      genres: ['novel', 'thriller', 'suspense', 'crime novel'],
      pages: 616,
      releaseDate: '22-05-2000',
      isBorrowed: false,
      clientFirstName: '',
      clientLastName: ''
    },
    {
      id: 6,
      ISBN: '85-13-43254-6',
      title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
      author: 'Ashlee Vance',
      genres: ['biography'],
      pages: 400,
      releaseDate: '19-05-2015',
      isBorrowed: false,
      clientFirstName: '',
      clientLastName: ''
    }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
