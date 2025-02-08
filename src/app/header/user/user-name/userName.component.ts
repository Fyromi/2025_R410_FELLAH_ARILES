import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [],
  templateUrl: './userName.component.html',
  styleUrl: './userName.component.scss'
})
export class UserNameComponent{

    @Input() name! : string;

    getName(): string{
      return this.name;
    }
}
