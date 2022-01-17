import { Component } from '@angular/core';

import { AuthService } from 'src/app/modules/auth/auth.service';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    private readonly http: HttpClient
  ) {}
  
  changeLoginStatus(status: string) {
    if (status === 'login') {
      
      let testToken = {login: `${this.login}`, password: `${this.password}`};
      let response = this.http.get(`http://localhost:3000/users?login=${this.login}&password=${this.password}`)
        .pipe(map(user => JSON.stringify(user)))
        .subscribe(x => {
          x.length > 5 
          ? this.authService.logIn(JSON.stringify(testToken))
          : console.error('No such data')
        });
    }
  }
}
