import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard.module';
import { AuthModule } from './modules/auth.module';

import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { AuthGuard } from './guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
