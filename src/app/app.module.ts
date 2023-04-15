import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './signUp/signUp.component';
import { LoginComponent } from './login/login.component';

//Module
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessonComponent } from './aula/lesson/lesson.component';
import { CourseComponent } from './course/course.component';
import { ConstrucaoComponent } from './construcao/construcao.component';
import { QuestionarioComponent } from './aula/questionario/questionario.component';
import { AulaComponent } from './aula/aula.component';
import { DescricaoAulaComponent } from './aula/descricao-aula/descricao-aula.component';
import { TituloAulaComponent } from './aula/titulo-aula/titulo-aula.component'

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    LessonComponent,
    CourseComponent,
    ConstrucaoComponent,
    QuestionarioComponent,
    AulaComponent,
    DescricaoAulaComponent,
    TituloAulaComponent,
  ],
  imports: 
  [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
      tokenGetter: tokenGetter,
      allowedDomains: [""],
      disallowedRoutes: [""],
    }
  })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
