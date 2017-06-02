import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule} from './app-routing.module'

import { AppComponent }  from './app.component';
import { ProductService } from './product.service'
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductSearchComponent } from './product-search.component';


@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	AppRoutingModule
  ],
  declarations:	[ AppComponent, ProductDetailComponent, ProductsComponent, DashboardComponent, ProductSearchComponent ],
  bootstrap:	[ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
