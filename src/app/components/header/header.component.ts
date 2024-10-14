import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  userDisplayName: string | null = null;

  constructor(public authService: AuthService) {
    // Subscribe to authentication state
    this.authService.user$.subscribe(user => {
      this.isLoggedIn = !!user;
      this.userDisplayName = user ? user.displayName : null;
    });
  }

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
