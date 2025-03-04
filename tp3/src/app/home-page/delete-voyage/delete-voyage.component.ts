import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voyage, VoyagesService } from '../../services/voyages.service';

@Component({
  selector: 'app-delete-voyage',
  standalone: true,
  imports: [],
  templateUrl: './delete-voyage.component.html',
  styleUrl: './delete-voyage.component.scss'
})
export class DeleteVoyageComponent {
  @Input({required: true}) voyageSupp!: Voyage;
  @Output() fermerModal = new EventEmitter<string>();

  constructor(
    private readonly voyagesService: VoyagesService,
  ) {}

  supprimerVoyage(): void {
    this.voyagesService.delete(this.voyageSupp.id);
    this.fermerModal.emit("voyageSupp")
  }

  annulerSupp(): void {
    this.fermerModal.emit("annulation");
  }
}