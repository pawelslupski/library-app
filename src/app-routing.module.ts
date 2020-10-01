import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import { BooksListComponent } from './app/books/books-list/books-list.component';

const APP_ROUTES : Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', component: <any>BooksListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}