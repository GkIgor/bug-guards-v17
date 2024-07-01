import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const isAuthenticateGuard: CanActivateFn = (route, state) => {
  const token = inject(SsrCookieService).check('_AUTH_TOKEN');
  const router = inject(Router);
  const reqFakeHttp = (): Promise<boolean> =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (!token) {
          router.navigate(['/auth']);
          resolve(false);
        }
        resolve(true);
      }, 2000);
    });
  return reqFakeHttp();
};
