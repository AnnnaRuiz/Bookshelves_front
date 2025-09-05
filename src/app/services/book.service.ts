import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../environments/environment.development';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http:HttpClient) {}
    
    public getBooks(page: number = 0, size: number = 6): Observable<Page<Book>> {
        return this.http.get<Page<Book>>(`${this.apiServerUrl}/book/all?page=${page}&size=${size}`);
    }

    public addBook(book: Book): Observable<Book> {
        return this.http.post<Book>(`${this.apiServerUrl}/book/add`, book)
    }

    public updateBook(book: Book): Observable<Book> {
        return this.http.put<Book>(`${this.apiServerUrl}/book/update`, book)
    }

    public deleteBook(bookId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/book/delete/${bookId}`)
    }
}
