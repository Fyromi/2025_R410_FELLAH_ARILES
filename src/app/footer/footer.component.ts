import { Component } from '@angular/core';
import { DescFooterComponent } from './desc-footer/desc-footer.component';
import { ListeDonneeFooterComponent } from './liste-donnee-footer/liste-donnee-footer.component';

type listeFooter = {
  title:string;
  element: Array<string>;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DescFooterComponent, ListeDonneeFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  liste :Array<listeFooter> = [];

  constructor(){
    this.liste.push({ title: 'Company', element: ['About', 'Testimonials', 'Find a doctor', 'Apps']},
                    { title: 'Region', element: ['Indonesia', 'Singapore', 'Hongkong', 'Canada']},
                    { title: 'Help', element : ['Help center', 'Contact support', 'Instructionsr', 'How it works']},
    );
  }
}
