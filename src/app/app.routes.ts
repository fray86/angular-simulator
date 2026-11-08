import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/users/users.component').then(m => m.UsersComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
  }
];
