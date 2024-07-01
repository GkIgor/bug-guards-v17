import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), SsrCookieService]
};
