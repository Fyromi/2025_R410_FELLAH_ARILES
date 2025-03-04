import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  private readonly authService = inject(AuthService);
  isLoggedIn$!: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.authService.getLoginStatus();
  }

  login() {
    this.authService.login();
  }

  logOut() {
    this.authService.logout();
  }
}
