import { Component, Type } from '@angular/core';
import { DescOurServicesComponent } from './desc-our-services/desc-our-services.component';
import { GrilleServiceComponent } from './grille-service/grille-service.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [DescOurServicesComponent, GrilleServiceComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent{
}