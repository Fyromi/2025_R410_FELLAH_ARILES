import { Component, OnInit } from '@angular/core';
import { Voyage, VoyagesService } from '../services/voyages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteVoyageComponent } from '../home-page/delete-voyage/delete-voyage.component';

@Component({
  selector: 'app-voyage-page',
  standalone: true,
  imports: [DeleteVoyageComponent],
  templateUrl: './voyages.component.html',
  styleUrl: './voyages.component.scss'
})
export class VoyagesComponent implements OnInit {
  voyage!: Voyage;
  afficherSuppression: boolean = false;

  constructor(
    private readonly voyagesService: VoyagesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.voyage = this.voyagesService.findById("" + this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.voyagesService.checkVide(this.voyage)) {
      this.router.navigate(['/404']);
    }
  }

  afficherDialogueSuppression(): void {
    this.afficherSuppression = true;
  }

  masquerDialogueSuppression(): void {
    this.afficherSuppression = false;
  }

  gererActionModal(action: string): void {
    if(action == "voyageSupp") {
      this.supprimerVoyage();
      this.router.navigate(['/home']);
    }
    else {
      this.masquerDialogueSuppression();
    }
  }

  supprimerVoyage(): void {
    this.voyagesService.delete(this.voyage.id);
  }

}