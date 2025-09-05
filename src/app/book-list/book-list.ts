import { Component } from '@angular/core';
import { Book } from '../models/book';
import { HttpErrorResponse } from '@angular/common/http';
import { BookService } from '../services/book.service';
import { BookCard } from '../book-card/book-card';
import { Page } from '../models/page';

@Component({
  selector: 'app-book-list',
  imports: [BookCard],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookList {
  public books!: Book[];
  public currentPage: number = 0;
  public totalPages: number = 0;

  constructor(private bookService: BookService){}

  ngOnInit(): void {
      this.getBooks(0);
  }

  public getBooks(page: number): void {
    this.bookService.getBooks(page).subscribe({
      next: (response: Page<Book>) => {
        this.books = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      console.log(page);
      this.getBooks(page);
    }
  }

}
