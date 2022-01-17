import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesData } from 'src/app/core/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _router: Router) {}
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
    this._router.navigateByUrl(RoutesData.AppEnum.PAGES)
    window.localStorage.setItem('token', token);
  }

  public logOut() {
    this._token = null;
    this._router.navigateByUrl(RoutesData.AppEnum.AUTH)
    window.localStorage.removeItem('token');
  }
}
