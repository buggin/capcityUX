import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule} from './app-routing.module'

import { AppComponent }  from './app.component';
import { ProductService } from './products/product.service'
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductSearchComponent } from './products/product-search.component';


@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	AppRoutingModule
  ],
  declarations:	[ AppComponent, ProductDetailComponent, ProductsComponent, ProductSearchComponent ],
  bootstrap:	[ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
