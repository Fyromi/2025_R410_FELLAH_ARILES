import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-logo',
  standalone: true,
  imports: [],
  templateUrl: './user-logo.component.html',
  styleUrl: './user-logo.component.scss'
})
export class UserLogoComponent {
    
  @Input({required:true}) initial!: string;

}
