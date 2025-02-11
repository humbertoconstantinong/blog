import { Component, inject } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../service/state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  imports: [
    FormsModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzSwitchModule,
    NzSkeletonModule,
    RouterLink,
  ],
})
export class ArticlesComponent {
  constructor(private stateService: StateService) {}
  articles: Array<Article> = [];
  articleService = inject(ArticlesService);
  loading = true;
  ngOnInit() {
    this.loadArtigos();
    this.stateService.modalClosed$.subscribe((isClosed) => {
      if (isClosed) {
        this.loadArtigos();
      }
    });
  }

  loadArtigos() {
    this.articleService.getArticles().subscribe((res) => {
      if (res) {
        this.articles = res;
        this.loading = false;
      }
    });
  }

  removeArticle(id: any) {
    this.articleService.removeArticle(id.id).subscribe(() => {
      this.loadArtigos();
    });
  }
}
