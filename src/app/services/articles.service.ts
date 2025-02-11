import { inject, Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { from, map, Observable } from 'rxjs';
import { Database } from '../database.types';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  supabase = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  getArticles(): Observable<Article[] | null> {
    const promise = this.supabase
      .from('Article')
      .select('*')
      .order('created_at', { ascending: false })
      .returns<Article[]>();
    return from(promise).pipe(map((response) => response.data));
  }
  getArticleById(id: number): Observable<Article[] | null> {
    const promise = this.supabase
      .from('Article')
      .select('*')
      .match({ id: id })
      .returns<Article[]>();
    return from(promise).pipe(map((response) => response.data));
  }

  newArticle(payload: any): Observable<any> {
    const promise = this.supabase
      .from('Article')
      .insert(payload)
      .select('*')
      .single();

    return from(promise).pipe(
      map((result) => {
        result.data;
      })
    );
  }

  removeArticle(id: number): Observable<void> {
    const promise = this.supabase.from('Article').delete().match({ id: id });
    return from(promise).pipe(map(() => {}));
  }
}
