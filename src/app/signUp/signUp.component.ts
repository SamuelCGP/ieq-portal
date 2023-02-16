import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent {
  mode: Boolean = true;
  signUpForm!: FormGroup;

  ngOnInit(): void {
    // TODO: Implement strong validation
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    });
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

  signUpSubmit(): void {
    // TODO: Implement the form's submit
    if (this.signUpForm.invalid) return;
    alert('Sent');
  }
}
