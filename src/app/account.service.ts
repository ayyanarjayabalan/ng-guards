import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private isLoggedIn = false;

  constructor() { }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
