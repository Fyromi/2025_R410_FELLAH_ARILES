import { Component } from '@angular/core';
import { DescVirtualHearthComponent } from './desc-virtual-hearth/desc-virtual-hearth.component';

@Component({
  selector: 'app-virtual-hearth',
  standalone: true,
  imports: [DescVirtualHearthComponent],
  templateUrl: './virtual-hearth.component.html',
  styleUrl: './virtual-hearth.component.scss'
})
export class VirtualHearthComponent {

}
