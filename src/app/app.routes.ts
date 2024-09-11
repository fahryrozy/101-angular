import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentComponent } from './component/component.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DiComponent } from './di/di.component';
import { HttpComponent } from './http/http.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'component',
    title: 'App Home Page',
    loadComponent: () =>
      import('./component/component.component').then(
        (m) => m.ComponentComponent
      ),
  },
  {
    path: 'nav',
    title: 'App User Page',
    component: NavigationComponent,
  },
  {
    path: 'di',
    title: 'App User Page',
    component: DiComponent,
  },
  {
    path: 'http',
    title: 'App User Page',
    component: HttpComponent,
  },
];
