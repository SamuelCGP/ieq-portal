import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cadastro } from '../shared/models/Cadastro';
import { CadastroService } from '../services/Cadastro/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent {
  mode: Boolean = true;
  signUpForm!: FormGroup;

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // TODO: Implement strong validation
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    });
  }

  get signUpName() {
    return this.signUpForm.get('name')!;
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
    if (!this.signUpForm.invalid) {
      let cadastro = new Cadastro();
      cadastro.Nome = this.signUpName.value;
      cadastro.Email = this.signUpEmail.value;
      cadastro.Senha = this.signUpPassword.value;
      cadastro.ConfirmarSenha = this.passwordConfirmation.value;

      const cadastroObserver = {
        next: (x: any) => {
          alert('Cadastro realizado com sucesso');
          this.router.navigate(['/login']);
        },
        error: (err: any) => {
          if (err.status == '400') {
            alert('erro na autenticação');
          }
        },
        complete: () => {
          console.log('Observer got a complete notification');
        },
      };
      this.cadastroService.postCadastro(cadastro).subscribe(cadastroObserver);
    }
  }
}
