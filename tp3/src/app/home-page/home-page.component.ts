import { DeleteVoyageComponent } from './delete-voyage/delete-voyage.component';
import { GrillComponent } from './grill/grill.component';
import { Component} from '@angular/core';
import { Voyage, VoyagesService } from '../services/voyages.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-home-page',
standalone: true,
imports: [GrillComponent, DeleteVoyageComponent],
templateUrl: './home-page.component.html',
styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
pageActuelle: number = 0;
voyages20! : Voyage[];
afficherGeneration: boolean = false;
afficherSuppression: boolean = false;
voyageGenere: Voyage = {destination: '', description: '', prix: 0, id:''};
voyageSupp: Voyage = {
    destination: '',
    description: '',
    prix: 0, id:'',
};

constructor(
    private readonly voyagesService: VoyagesService,
    private readonly router: Router
) {}

ngOnInit(): void {
    this.afficherGeneration = false;
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    if(!this.voyages20) {
    this.router.navigate(['/404']);
    }
}

afficherGenererVoyage(): void {
    this.voyageGenere = this.voyagesService.genererVoyage();
    this.afficherGeneration = true;
}

masquerGenererVoyage(): void {
    this.afficherGeneration = false;
    this.refresh();
}

genererVoyage(): void {
    this.voyagesService.genererVoyage();
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    this.router.navigate(['/home']);
}

nextPage(): void {
    if(this.pageActuelle < this.voyagesService.pagesMax()) {
    this.pageActuelle++;
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    }
}

prevPage(): void {
    if(this.pageActuelle > 0) {
    this.pageActuelle--;
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
    }
}

refresh(): void {
    this.voyages20 = this.voyagesService.find20(this.pageActuelle);
}

afficherDialogueSuppression(id: string) {
    this.voyageSupp = this.voyagesService.findById(id);
    this.afficherSuppression = true;
}

masquerDialogueSuppression() {
    this.afficherSuppression = false;
    this.refresh();
}

supprimerVoyage(id: string): void {
    this.voyagesService.delete(id);
    this.refresh();
}
}
