import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private auth: AuthService) { }

  

  changeLoginStatus(status: string) {
    if(status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  }

}
