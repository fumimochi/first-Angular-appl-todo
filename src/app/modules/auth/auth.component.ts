import { Component } from '@angular/core';

import { AuthService } from 'src/app/modules/auth/auth.service';
import { UsersService } from 'src/app/core/services/users.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public login: string = '';
  public password: string = '';

  getLogin(event: Event) {
    this.login = (<HTMLInputElement>event.target).value;
  }
  getPassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}
  
  changeLoginStatus(status: string) {
    if (status === 'login') {
      let testToken = {login: `${this.login}`, password: `${this.password}`};
      this.usersService.getUsers().pipe(map(user => JSON.stringify(user) == JSON.stringify(testToken) )).subscribe(x => {
        console.log(x)
      });
      console.log(JSON.stringify(testToken))
      this.authService.logIn(JSON.stringify(testToken))
      // this.authService.checkData(this.login, this.password, this.arr);
    }
  }
}
