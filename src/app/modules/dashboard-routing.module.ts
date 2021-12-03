import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberFormComponent } from '../admin/member-form/member-form.component';
import { ProductFormComponent } from '../admin/product-form/product-form.component';
import { AboutComponent } from '../dashboard/about/about.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { AuthGuard } from '../guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'create-product',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-member',
    component: MemberFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
