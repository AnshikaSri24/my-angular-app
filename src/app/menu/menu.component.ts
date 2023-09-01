import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  collapsed: boolean = false;
  
  constructor(private _loginService: LoginService) {
  }

  get isLoggedIn(): boolean {
    return this._loginService.isAuthenticated();
  }
  toggleMenu() {
    this.collapsed = !this.collapsed;
  }
  logout() {
    this._loginService.logout();
  }
}
