import { Component } from '@angular/core';

import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appTitle = 'ToDo Application';

  constructor(
    private readonly authService: AuthService
  ) {}

  public changeLoginStatus(status: string) {
    this.authService.logOut();
  }
}
