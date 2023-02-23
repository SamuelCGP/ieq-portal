import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Login } from '../shared/models/login';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  mode: Boolean = true;
  loginForm!: FormGroup;

  constructor(private loginService : LoginService,private router:Router,private serviceStorage : LocalStorageService){}

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
    if (!this.loginForm.invalid){

      let login = new Login();
      login.Email = this.loginEmail.value;
      login.Senha = this.loginPassword.value;

      const myObserver = {
        next: (x: any) =>{
          alert(`Bem vindo ao Portal da IEQ Vila Mara`)
          this.router.navigate(['/dashboard']);
          this.serviceStorage.setToken(x.token)
          this.serviceStorage.setEmail(x.email)
          this.serviceStorage.setNome(x.nome);
        },
        error: (err: any) => {          
          if(err.status == '400' || err.status == '404'){
            alert(err.error.message);
          }
          else{
            alert('Estamos enfrentando problemas')
          }
        },
        complete: () => {
          console.log('Observer got a complete notification')
        },
      };

      this.loginService.Login(login).subscribe(myObserver);
    }
  }
}
