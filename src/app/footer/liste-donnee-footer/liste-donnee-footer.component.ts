import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liste-donnee-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-donnee-footer.component.html',
  styleUrl: './liste-donnee-footer.component.scss'
})
export class ListeDonneeFooterComponent {

  @Input() liste! : {title: string; element: Array<string>}

  getTitle(){
    return this.liste.title;
  }

  getElement(){
    return this.liste.element;
  }
}
