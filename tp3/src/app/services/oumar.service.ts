import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class OumarService {
  private readonly API_URL = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/books');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + '/books/' + id);
  }

  createBook(book: Omit<Book, 'id' | 'coverUrl'>): Observable<{id: number}> {
    return this.http.post<Book>(this.API_URL + '/books', book).pipe(map((data) => data));
  }

  deleteBook(id: number): void {
    this.http.delete(this.API_URL + '/books/' + id);
  }
}
