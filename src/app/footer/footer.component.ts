import { Component } from '@angular/core';
import { DescFooterComponent } from './desc-footer/desc-footer.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DescFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
