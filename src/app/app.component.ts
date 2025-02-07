import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NewArticleModal } from './shared/new-article-modal/new-article-modal.component';
import { LoginModalComponent } from './shared/login-modal/login-modal';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NewArticleModal, LoginModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;

  openModal =  false;
  openModalLogin =  false;
  isLogin = false;


  newArticle(){
    this.openModal = true;
  }
  login(){
    this.openModalLogin = true;
  }
  closeModal(){
    this.openModal = false;
    this.openModalLogin = false;
  }
}
