import { Component } from "@angular/core";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { UserComponent } from "./user/user.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [NavBarComponent, UserComponent],
    styleUrl: './header.component.scss'
})

export class Header{

}