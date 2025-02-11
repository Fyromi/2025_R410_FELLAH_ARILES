import { Component, Input } from '@angular/core';
import { ProfilComponent } from './profil/profil.component';
import { Customer } from '../customer-saying.component'

@Component({
  selector: 'app-profil-com',
  standalone: true,
  imports: [ProfilComponent],
  templateUrl: './profil-com.component.html',
  styleUrl: './profil-com.component.scss'
})
export class ProfilComComponent {
  @Input({required:true}) customer! : Customer;
}
