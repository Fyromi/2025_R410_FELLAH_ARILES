import { Component, Input } from '@angular/core';
import { Customer } from '../../../global-customer-saying.component';
import { ProfilDescComponent } from './profil-desc/profil-desc.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [ProfilDescComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  @Input({required:true}) customer! :Customer;
}
