import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { BookApiService } from './books/services/book-api.service';
import { AppRoutingModule } from 'src/app-routing.module';
import { BooksRoutingModule } from './books/books-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule,
    BooksRoutingModule
  ],
  providers: [BookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
