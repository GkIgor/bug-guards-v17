import { Routes } from '@angular/router';
import { isAuthenticateGuard } from '../core/guards/auth/is-authenticate.guard';
import { AuthComponent } from '../pages/auth/auth.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [isAuthenticateGuard],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: AuthComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
