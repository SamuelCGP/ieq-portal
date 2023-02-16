import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  mode: Boolean = true;
  loginForm!: FormGroup;

  ngOnInit(): void {
    // TODO: Implement strong validation
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get loginEmail() {
    return this.loginForm.get('email')!;
  }

  get loginPassword() {
    return this.loginForm.get('password')!;
  }

  loginSubmit(): void {
    // TODO: Implement the form's submit
    if (this.loginForm.invalid) return;
    alert('Sent');
  }
}
