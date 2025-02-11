import { Component, inject, Input } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../service/state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-articles',
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss',
  imports: [FormsModule, NzAvatarModule, NzCardModule, NzIconModule, NzSwitchModule, NzSkeletonModule]
})
export class DetailArticlesComponent {
  constructor(private route: ActivatedRoute,) {}
  articles : Array<Article> = []
  articleService = inject(ArticlesService)
  loading = true;
  ngOnInit(){
    const articleId = this.route.snapshot.paramMap.get('id');
    this.loadArtigo(articleId)
   }

   loadArtigo(id: any){
    this.articleService.getArticleById(id).subscribe((res)=>{
      if(res){
        this.articles = res;
        this.loading = false;
      }
    });
   }

   removeArticle(id: any){
    this.articleService.removeArticle(id.id).subscribe(()=>{
    });
   }
}

