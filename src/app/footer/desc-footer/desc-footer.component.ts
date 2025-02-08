import { Component } from '@angular/core';
import { UserComponent } from '../../header/user/user.component';

@Component({
  selector: 'app-desc-footer',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './desc-footer.component.html',
  styleUrl: './desc-footer.component.scss'
})
export class DescFooterComponent {

}
