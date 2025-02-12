import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profil-desc',
  standalone: true,
  imports: [],
  templateUrl: './profil-desc.component.html',
  styleUrl: './profil-desc.component.scss'
})
export class ProfilDescComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) role!:string;
}
