import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/signUp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessonComponent } from './lesson/lesson.component';
import { ConstrucaoComponent } from './construcao/construcao.component'
import { UsuarioGuard } from './autentication/autentication.guard';
import { QuestionarioComponent } from './questionario/questionario.component';

const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '', 
    component:HomeComponent,
    canActivate:[UsuarioGuard],
      children:[
        { path:'',component:HomeComponent},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'lesson', component: LessonComponent },
        { path: 'construcao',component:ConstrucaoComponent},
        { path: 'lesson/:cursoId/:id',component:LessonComponent},
        { path: 'lesson/:cursoId',component:LessonComponent},
        { path: 'questionario/:aulaId',component:QuestionarioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
