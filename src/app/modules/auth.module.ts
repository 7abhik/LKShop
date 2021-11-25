import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
