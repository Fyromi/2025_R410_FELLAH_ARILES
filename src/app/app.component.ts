import { Component } from '@angular/core';
import { Header } from './header/header.component';
import { VirtualHearthComponent } from './virtual-hearth/virtual-hearth.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, VirtualHearthComponent, OurServicesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
