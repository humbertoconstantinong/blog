import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES), },
  { path: 'youtube', loadChildren: () => import('./pages/youtube/youtube.routes').then(m => m.YOUTUBE_ROUTES), },
  { path: 'articles', loadChildren: () => import('./pages/articles/articles.routes').then(m => m.ARTICLES_ROUTES), },
  { path: 'login', loadChildren: () => import('./shared/login-modal/login-modal.routes').then(m => m.LOGIN_MODAL_ROUTES), },
];
