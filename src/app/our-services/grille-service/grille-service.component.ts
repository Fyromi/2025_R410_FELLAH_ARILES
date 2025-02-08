import { Component } from '@angular/core';
import { OngletsServiceComponent } from './onglets-service/onglets-service.component';
import { CommonModule } from '@angular/common';

type Onglet = {
    image: string;
    titre: string;
    description: string;
}

@Component({
  selector: 'app-grille-service',
  standalone: true,
  imports: [OngletsServiceComponent, CommonModule],
  templateUrl: './grille-service.component.html',
  styleUrl: './grille-service.component.scss'
})
export class GrilleServiceComponent {

  onglets: Array<Onglet> = [];

  constructor(){
  this.onglets.push({
      image: 'Search',
      titre:"Search doctor",
      description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    image: 'Online',
      titre:"Online pharmacy",
      description: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    image: 'Consultation',
    titre:"Consultation",
    description: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image:"Details",
    titre:"Details info",
    description: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    image:"Emergency",
    titre:"Emergency care",
    description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    image:"Tracking",
    titre:"Tracking",
    description: "Track and save your medical history and health data",
  })
}

getOnglet(){
  return this.onglets;
}
}
