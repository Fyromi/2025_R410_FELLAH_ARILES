import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { GeneratorComponent } from './generator/generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, VoyagesComponent, GeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TP4';

  constructor(private readonly router:Router) {
    router.navigate(['home']);
  }
}