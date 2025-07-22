import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { PageNotFound } from './shared/reusableComponent/page-not-found/page-not-found';
import { AboutUs } from './pages/about-us/about-us';
import { Products } from './pages/products/products';
import { Blog } from './pages/blog/blog';
import { ContactUs } from './pages/contact-us/contact-us';
import { Services } from './pages/services/services';
import { Careers } from './pages/careers/careers';

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
    path: 'about-us',
    component: AboutUs,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'services',
    component: Services,
  },
  {
    path: 'careers',
    component: Careers,
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
