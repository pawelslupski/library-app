import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";

const BOOKS_ROUTES : Route[] = [
//   { path: 'books/:id', component: <any>BookDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(BOOKS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class BooksRoutingModule {}