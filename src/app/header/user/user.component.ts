import { Component } from '@angular/core';
import { UserNameComponent } from './user-name/userName.component';
import { UserLogoComponent } from './user-logo/user-logo.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserNameComponent, UserLogoComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  
  name: string = "Trafalgar";
  initial: string = this.name[0];

}
