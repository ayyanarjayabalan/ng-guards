import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }

  login(role: string) {
    this.account.login(role);
  }

  logout() {
    this.account.logout();
  }

  isLogged(): boolean {
    return this.account.isAuthenticated();
  }
}
