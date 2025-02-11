import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liste-donnee-footer',
  standalone: true,
  imports: [],
  templateUrl: './liste-donnee-footer.component.html',
  styleUrl: './liste-donnee-footer.component.scss'
})
export class ListeDonneeFooterComponent {

  @Input({required:true}) liste! : {title: string; element: Array<string>}

}
