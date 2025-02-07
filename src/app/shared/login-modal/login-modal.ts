import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AuthService } from '../../services/auth.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.scss',
  imports:[NzModalModule,NzButtonModule, NzFormModule, NzInputModule, ReactiveFormsModule,NzSpinModule ]
})
export class LoginModalComponent {
  isVisibleMiddle = false;
  spin = false;
  @Input() openModal:  boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleCancelMiddle(): void {
    this.closeModal.emit(true); 
  }

   constructor(private fb: NonNullableFormBuilder, private router: Router) {}
    authService = inject(AuthService)
    validateForm: any;
  
    ngOnInit(){
      this.validateForm = this.fb.group({
        username: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required]),
        remember: this.fb.control(true)
      });
    }

    // registrar(){
    //   this.authService.register("humbertoconstantino73@gmail.com", "humberto", "Kk996508970@").subscribe()
    // }
 
  

  handleOkMiddle(): void {
    this.spin = true;
    this.authService.login(this.validateForm.controls['username'].value, this.validateForm.controls['password'].value).subscribe((res)=>{
      localStorage.setItem('user', JSON.stringify(res));
      this.spin = false;
      this.closeModal.emit(true); 
      this.router.navigate(['/welcome']);
    });
  }   

 
}
