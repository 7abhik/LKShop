import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from '../admin/product-form/product-form.component';
import { AboutComponent } from '../dashboard/about/about.component';
import { HomeComponent } from '../dashboard/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
