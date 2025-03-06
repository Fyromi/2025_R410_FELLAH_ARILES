import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { RouterLink } from '@angular/router';
import { OumarService } from '../../services/oumar.service';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(OumarService);
  books: Book[] = [];
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });


    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
