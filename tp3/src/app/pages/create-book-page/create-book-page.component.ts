import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {

  private readonly serviceBook = inject(BooksInMemoryService)

  constructor(private readonly router: Router){}

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    author: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)])
  })
  
  onSubmit(){
    if(this.bookForm.valid)
      this.serviceBook.createBook(this.bookForm.value as Book)
      this.router.navigate(['/'])
  }
  
}
