import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-connexion-status',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './connexion-status.component.html',
  styleUrl: './connexion-status.component.css',
})
export class ConnexionStatusComponent {
  private readonly authService = inject(AuthService);
  loggedStatus$!: Observable<boolean>;

  ngOnInit() {
    this.loggedStatus$ = this.authService.getLoginStatus();
  }
}
