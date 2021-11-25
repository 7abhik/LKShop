import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard.module';
import { AuthModule } from './modules/auth.module';
import { ProductFormComponent } from './admin/product-form/product-form.component';
@NgModule({
  declarations: [AppComponent, ProductFormComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
