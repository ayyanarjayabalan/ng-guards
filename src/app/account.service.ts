import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private isLoggedIn = false;
  private role = 'basic';

  constructor() { }

  getUserRole(): string {
    return this.role;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  login(role: string) {
    this.isLoggedIn = true;

    if (role) {
      this.role = role;
    } else {
      this.role = 'basic';
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
