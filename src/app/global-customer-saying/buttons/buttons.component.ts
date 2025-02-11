import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  
  @Output() value = new EventEmitter<number>();

  nextReview(){
    this.value.emit(1);
  }

  previousReview(){
    this.value.emit(-1);
  }
}
