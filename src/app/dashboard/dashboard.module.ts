import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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
