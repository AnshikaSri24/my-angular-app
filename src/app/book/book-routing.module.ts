import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './';
import { BookAuthorComponent } from './';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    { path: 'book-list', component: BookListComponent, canActivate: [AuthGuard] },
    { path: 'book-author', component: BookAuthorComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
