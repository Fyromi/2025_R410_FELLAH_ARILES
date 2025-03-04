import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage, VoyagesService } from '../../services/voyages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OngletComponent } from './onglet/onglet.component';


@Component({
  selector: 'app-grill',
  standalone: true,
  imports: [OngletComponent],
  templateUrl: './grill.component.html',
  styleUrl: './grill.component.scss'
})
export class GrillComponent {
  @Input() voyages!: Voyage[];
  @Output() voyageSupp = new EventEmitter<string>();

  constructor() {}

  supprimerVoyage(suppr: string): void {
    this.voyageSupp.emit(suppr);
  }
}