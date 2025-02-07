import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [NzButtonModule, NzFormModule, NzInputModule, ReactiveFormsModule]
})
export class LoginComponent {
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

 
}
