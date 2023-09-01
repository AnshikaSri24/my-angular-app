import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginDataUrl = 'https://0eb60c0b-b5ed-4f9e-8377-6016f60f5ac3.mock.pstmn.io/LoginRoles';
  private isLoggedIn: boolean = false;
  private userRole : string = "";
  constructor(private http: HttpClient,private _router: Router) { }

  getLoginData(): Observable<any> {
    return this.http.get(this.loginDataUrl);
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.getLoginData().pipe(
      map((data: any[]) => {
        debugger;
        console.log("A");
        // The find function searches for a user with matching username and password
        const validUser = data.find((user: any) => user.username === username && user.password === password);
        this.userRole = validUser.Roles;
        
        // If a valid user is found, validUser will be the user object; otherwise, it will be undefined
        this.isLoggedIn = !!validUser;
        return !!validUser; // Convert validUser to a boolean (true if user is found, false if not)
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  
  getCurrentUserRole(): string{
    return this.userRole;
  }
  
}
