import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {WelcomeResolver} from './welcome/welcome.resolver';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, WelcomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    WelcomeResolver
  ]
})
export class AuthModule { }
