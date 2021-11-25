import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
