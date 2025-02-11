import { Routes } from '@angular/router';
import { DetailArticlesComponent } from './detail-article.component';

export const DETAIL_ARTICLES_ROUTES: Routes = [
  { path: ':id', component: DetailArticlesComponent },
];
