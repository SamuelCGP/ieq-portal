import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  mode: Boolean = true;
  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  ngOnInit(): void {
    // TODO: Implement strong validation
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    });
  }

  get loginEmail() {
    return this.loginForm.get('email')!;
  }

  get loginPassword() {
    return this.loginForm.get('password')!;
  }

  get signUpEmail() {
    return this.signUpForm.get('email')!;
  }

  get signUpPassword() {
    return this.signUpForm.get('password')!;
  }

  get passwordConfirmation() {
    return this.signUpForm.get('passwordConfirmation')!;
  }

  loginSubmit(): void {
    // TODO: Implement the form's submit
    if (this.loginForm.invalid) return;
    alert('Sent');
  }

  signUpSubmit(): void {
    // TODO: Implement the form's submit
    if (this.signUpForm.invalid) return;
    alert('Sent');
  }
}
