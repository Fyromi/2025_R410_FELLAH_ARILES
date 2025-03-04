import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX} from './voyages.const';;

export type Voyage = {
  destination: string,
  description: string,
  prix: number,
  id: string,
}

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {

  private readonly voyages: Voyage[];

  constructor() {
    this.voyages = [];
    for (let i:number = 0; i < DESTINATIONS.length; i++) {
      this.voyages.push({destination: DESTINATIONS[i], description: DESCRIPTIONS[i], prix: PRIX[i], id: "" + Math.floor(Math.random()*100000)})
    }
  }

  findAll(): Voyage[] {
    return this.voyages;
  }

  findById(id: string): Voyage {
    return this.voyages.find((voyage) => voyage.id == id) ?? {destination: '', description: '', prix: 0, id: ''};
  }

  find20(page: number): Voyage[] {
    return this.voyages.slice(page*20, (page+1)*20);
  }

  add(voyage: Voyage): void {
    this.voyages.push(voyage);
  }

  delete(id: string): void {
    for(let i:number = 0; i < this.voyages.length; i++) {
      if(this.voyages[i].id == id) {
        this.voyages.splice(i, 1);
        break;
      }
    }
  }

  genererVoyage(): Voyage {
    let maxRandom: number = DESTINATIONS.length;
    let voyageRandom: Voyage = {
      destination: DESTINATIONS[Math.floor(Math.random()*maxRandom)],
      description: DESCRIPTIONS[Math.floor(Math.random()*maxRandom)],
      prix: PRIX[Math.floor(Math.random()*maxRandom)],
      id: "" + Math.floor(Math.random()*100000),
    };
    return voyageRandom;
  }

  pagesMax(): number {
    if(this.voyages.length == 0) {
      return 0;
    }
    return Math.floor((this.voyages.length-1)/20);
  }

  checkVide(voyage: Voyage): boolean {
      return voyage.destination == '' && voyage.description == '' && voyage.prix == 0 && voyage.id == '';
  }
}