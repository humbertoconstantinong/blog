import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ArticlesService } from '../../services/articles.service';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article-modal.component.html',
  styleUrl: './new-article-modal.component.scss',
  imports:[NzModalModule, NzInputModule, ReactiveFormsModule, NzButtonModule, NzFormModule, ReactiveFormsModule]
})
export class NewArticleModal {
  constructor(private fb: NonNullableFormBuilder, private stateService: StateService) {}
  isVisibleMiddle = false;
  @Input() openModal:  boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  articleService = inject(ArticlesService)
  validateForm: any;
  
  ngOnInit(){
    this.validateForm = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
    });
  }

  handleCancelMiddle(): void {
    this.stateService.closeModal();
    this.closeModal.emit(true); 
  }

  handlerNewArticle(){
    let payload = {
      title: this.validateForm.controls['title'].value,
      description: this.validateForm.controls['description'].value
    }

    return payload;
  }

  createArticle(){
    this.articleService.newArticle(this.handlerNewArticle()).subscribe((res)=>{
      this.closeModal.emit(true); 
    });
   }
}
