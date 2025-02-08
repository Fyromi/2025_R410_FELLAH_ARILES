import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    
    private names: Array<string> = ["Home", "Find a doctor", "Apps", "Testimonial", "About us"];

    getNames(): Array<string>{
        return this.names;
    }
}
