import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component'
import { ProductsComponent } from './products.component'
import { ProductService } from './product.service'


@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	RouterModule.forRoot([
			{
				path: 'products',
				component: ProductsComponent
			}
		]) 
  ],
  declarations:	[ AppComponent, ProductDetailComponent, ProductsComponent ],
  bootstrap:	[ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
