import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private readonly authService: AuthService) {}

  changeLoginStatus(status: string) {
    if (status === 'login') {
      this.authService.logIn();
    } else {
      this.authService.logOut();
    }
  }
}
