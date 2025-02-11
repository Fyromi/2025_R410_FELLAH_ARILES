import { Component, Input } from '@angular/core';
import { ProfilComComponent } from './profil-com/profil-com.component';
import { Customer } from '../global-customer-saying.component';

@Component({
  selector: 'app-customer-saying',
  standalone: true,
  imports: [ProfilComComponent],
  templateUrl: './customer-saying.component.html',
  styleUrl: './customer-saying.component.scss'
})
export class CustomerSayingComponent {
  @Input({required: true}) customer!: Customer;
}
