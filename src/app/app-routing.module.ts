import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
	{path: '', redirectTo: '/products', pathMatch: 'full'},
	{path: 'products', component: ProductsComponent},
	{path: 'dashboard',	component: DashboardComponent},
	{path: 'detail/:id',	component: ProductDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}