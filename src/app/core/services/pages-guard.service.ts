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

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PagesGuard implements CanActivate {
  constructor(
    private readonly pagesService: AuthService,
    private readonly _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.pagesService.isAuth()) {
      return true;
    }

    this._router.navigate([RoutesData.AppEnum.AUTH]);

    return false;
  }
}
