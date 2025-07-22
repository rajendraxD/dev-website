import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { PageNotFound } from './shared/reusableComponent/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: '**',
    component: PageNotFound
  }
];
