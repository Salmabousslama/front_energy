import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SignupComponent {
  private fb = inject(FormBuilder); // Injection moderne

  signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cin: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup data:', this.signupForm.value);
    }
  }
}