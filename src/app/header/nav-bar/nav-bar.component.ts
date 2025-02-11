import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    
    names: Array<string> = ["Home", "Find a doctor", "Apps", "Testimonial", "About us"];
}
