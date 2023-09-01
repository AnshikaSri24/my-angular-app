import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private _loginService: LoginService, private _router:Router) { }

  login() {
    this._loginService.authenticate(this.username, this.password)
      .subscribe(isValid => {
        if (isValid) {
          console.log('Login successful!');
          this._router.navigate(['./book/book-author']);

        } else {
          console.log('Login failed. Incorrect username or password.');
        }
      });
  }
  
}
