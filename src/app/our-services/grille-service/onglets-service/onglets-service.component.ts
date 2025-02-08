import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onglets-service',
  standalone: true,
  imports: [],
  templateUrl: './onglets-service.component.html',
  styleUrl: './onglets-service.component.scss'
})
export class OngletsServiceComponent {
    @Input() onglet!: {titre: string; description: string; image:string}

    getTitre(){
        return this.onglet.titre;
    }
    getDesciption(){
        return this.onglet.description;
    }

    getImage(){
        return this.onglet.image;
    }
}
