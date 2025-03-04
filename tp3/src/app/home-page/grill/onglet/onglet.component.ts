import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage } from '../../../services/voyages.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onglet',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './onglet.component.html',
  styleUrl: './onglet.component.scss'
})
export class OngletComponent {
  @Input({required: true}) voyage!: Voyage;
  @Output() suppr = new EventEmitter<string>();

  supprimerVoyage(): void {
    this.suppr.emit(this.voyage.id);
  }
}