import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.account.getUserRole() === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  constructor(private account: AccountService, private router: Router) {

  }


}
