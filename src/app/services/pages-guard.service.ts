import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable()
export class PagesGuard implements CanActivate {
  constructor(private readonly pagesService: AuthService) {}
  
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): 
          | boolean 
          | UrlTree 
          | Observable<boolean | UrlTree> 
          | Promise<boolean | UrlTree> {
        return this.pagesService.isAuth() ? true : false;
    }


    
}