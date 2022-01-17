import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { RoutesData } from '../routes';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly _router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    

    if(state.url === '/todos' && !this.authService.isAuth()) {
      this._router.navigate([RoutesData.AppEnum.AUTH]);
      return true;
    }   
    if(state.url === '/auth' && this.authService.isAuth()) {
      this._router.navigate([RoutesData.AppEnum.PAGES]);
      return true;
    }
    return true;
  }
}
