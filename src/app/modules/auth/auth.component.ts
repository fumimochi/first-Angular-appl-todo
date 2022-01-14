import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  login: string = '';
  password: string = '';

  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  arr = this.usersService.getUsers();

  changeLoginStatus(status: string) {
    if (status === 'login') {
      // this.authService.checkData(this.login, this.password, this.arr);
    } else {
      this.authService.logOut();
    }
  }
}
