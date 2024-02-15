import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(
    private cookies: CookieService,
    private router: Router,
  ) {}

  private isAutenticate() {
    return this.cookies.check('_AUTH_TOKEN');
  }

  private removeToken() {
    if (this.isAutenticate()) this.cookies.delete('_AUTH_TOKEN');
    return;
  }

  private setToken(token: string) {
    this.removeToken();
    const oneDay = 24 * 60 * 60; // 1 dia em segundos
    this.cookies.set('_AUTH_TOKEN', token, { expires: oneDay, secure: true });
  }

  public submit(): void {
    // this a http request to your server
    new Promise(() => {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    });
  }
}
