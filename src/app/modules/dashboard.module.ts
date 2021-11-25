import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { NavbarComponent } from '../dashboard/navbar/navbar.component';
import { SideNavComponent } from '../dashboard/side-nav/side-nav.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { AboutComponent } from '../dashboard/about/about.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    NavbarComponent,
    SideNavComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {} 
