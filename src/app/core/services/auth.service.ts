import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: string;

  constructor() {
    this._token = window.localStorage.getItem('token');
  }

  public isAuth(): boolean {
    return !!this._token;
  }

  public checkData(login: string, password: string, arr: Array<Object>) {
    let user = { login, password };
    let num = arr.filter((i) => i == user).length;
    let token: string = '';
    if (num) {
      token = JSON.stringify(user);
      // this.isLoggedIn = true;
    } else {
      alert('Such login or password is never used');
    }
  }

  logIn(token: string) {
    this._token = token;
    window.localStorage.setItem('token', token);
  }

  logOut() {
    this._token = null;
    window.localStorage.removeItem('token');
  }
}
