import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article-modal.component.html',
  styleUrl: './new-article-modal.component.scss',
  imports:[NzModalModule]
})
export class NewArticleModal {
  constructor() {}
  isVisibleMiddle = false;
  @Input() openModal:  boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleCancelMiddle(): void {
    this.closeModal.emit(true); 
  }
  

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

 
}
