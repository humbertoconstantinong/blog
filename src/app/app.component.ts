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
  logged = false;
  name = 'Conta'
  ngOnInit(){
    if (localStorage.getItem('user') !== null) {
      this.logged = true;
  } else {
      this.logged = false;
  }
  let user: User
  user = JSON.parse(localStorage.getItem('user') || '');
  if (user) {
    this.logged = true;
    this.name = user.data.user.user_metadata?.username
} else {
  this.name = 'Conta'
    this.logged = false;
}
console.log(this.name)
  }



  newArticle(){
    this.openModal = true;
  }
  login(){
    this.openModalLogin = true;
  }
  logout(){
    localStorage.clear();
    if (localStorage.getItem('user') !== null) {
      this.logged = true;
    } else {
    this.name = 'Conta'
      this.logged = false;
  }
    
  }
  closeModal(){
    this.openModal = false;
    this.openModalLogin = false;
    let user: User
    user = JSON.parse(localStorage.getItem('user') || '');
    console.log(user)
    if (user) {
      this.logged = true;
      this.name = user.data.user.user_metadata.username
  } else {
    this.name = 'Conta'
      this.logged = false;
  }

  }
}

interface UserMetadata {
  username: string;
}

interface User {
  data: {
    user: User2;
  };
}
interface User2 {
  user_metadata: UserMetadata;
}

