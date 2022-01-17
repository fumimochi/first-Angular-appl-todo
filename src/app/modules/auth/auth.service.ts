import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: string = '';

  public getToken() {
    this._token = window.localStorage.getItem('token');
    return this._token;
  }

  public isAuth(): boolean {
    this.getToken();
    return !!this._token;
  }

  public logIn(token: string) {
    this._token = token;
    window.localStorage.setItem('token', token);
  }

  public logOut() {
    this._token = null;
    window.localStorage.removeItem('token');
  }
}
