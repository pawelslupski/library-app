import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../models/book';
import { NewBookComponent } from '../new-book/new-book.component';
import { BookApiService } from '../services/book-api.service';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {
  books: Book[];
  tableData: Book[];
  selectedFilter: string = 'title';

  constructor(private bookApiService: BookApiService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookApiService.getBooks().subscribe((books) => {
      this.books = books;
      this.tableData = books;
    });
  }

  openNewBookModal() {
    this.dialog.open(NewBookComponent);
  }

  openEditBookModal(book, $event) {
    event.stopPropagation();
    this.dialog.open(UpdateBookComponent, {data: book});
  }

  onKey(event: any) {
    let searchValue = event.target.value;
    let filteredTable = this.searchTable(searchValue, this.books, this.selectedFilter);
    this.tableData = [];
    this.tableData = filteredTable;
  }

  private searchTable(searchValue, originalData, selectedFilter): Book[] {
    let filteredData: Book[] = [];
    switch (selectedFilter) {
      case "ISBN":
        return filteredData = originalData.filter(book => book.ISBN.includes(searchValue)); 
        break;
      case "Title":
        return filteredData = originalData.filter(book => book.title.includes(searchValue));
        break;
      case "Author":
        return filteredData = originalData.filter(book => book.author.includes(searchValue));
        break;
      default:
        return filteredData = originalData.filter(book => book.title.includes(searchValue));
    }
  }

  selectChangeHandler (event: any) {
    event.preventDefault();
    this.selectedFilter = event.target.value;
  }

  removeBook(book: Book, event) {
    event.stopPropagation();
    this.bookApiService.deleteBook(book.id);
  }
}
