import { Component, OnInit, signal } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('bookshelves-front');
  public books?: Book[];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
      this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
