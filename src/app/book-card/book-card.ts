import { Component, Input } from '@angular/core';
import { Book } from '../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {

  @Input() book!: Book;

  constructor(private router: Router){}

  onViewBook(): void {
    this.router.navigateByUrl(`book/${this.book.bookCode}`);
  }

}
