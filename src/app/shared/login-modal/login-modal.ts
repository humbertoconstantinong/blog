import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.scss',
  imports:[NzModalModule,NzButtonModule, NzFormModule, NzInputModule, ReactiveFormsModule]
})
export class LoginModalComponent {
  isVisibleMiddle = false;
  @Input() openModal:  boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleCancelMiddle(): void {
    this.closeModal.emit(true); 
  }

   constructor(private fb: NonNullableFormBuilder) {}
    
    validateForm: any;
  
    ngOnInit(){
      this.validateForm = this.fb.group({
        username: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required]),
        remember: this.fb.control(true)
      });
    }
  
    submitForm(): void {
      console.log('submit', this.validateForm.value);
    }
  
  

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

 
}
