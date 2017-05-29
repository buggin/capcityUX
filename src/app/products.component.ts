import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service'
const {autoInit: mdcAutoInit} = require('node_modules/material-components-web/dist/material-components-web.js');

@Component({
  selector: 'my-products',
  template: `
	<h2 class="mdc-typography--display2">My products</h2>
	<div class="mdc-grid-list">
	  <ul class="mdc-list mdc-list--avatar-list">
	    <li *ngFor="let product of products" class="mdc-list-item" (click)="onSelect(product)">
	    	<span class="mdc-list-item__start-detail nga-bg"></span>
	     	<div class="mdc-list-item" data-mdc-auto-init="MDCRipple">{{product.name}}</div>
	    </li>
	  </ul>
	</div>
	<product-detail *ngIf="selectedProduct" [product]="selectedProduct"></product-detail>
  `
})
export class ProductsComponent implements OnInit, AfterViewInit {
	products: Product[];
	selectedProduct: Product;
	constructor(private productService: ProductService) { }
	
	onSelect(product: Product): void {
  	this.selectedProduct = product;
	}

	getHeroes(): void {
   	this.productService.getProducts().then(
   		products => {this.products = products}
   	);
  }

  ngOnInit(): void {
  	this.getHeroes();
  }

  ngAfterViewInit(): void {
  	mdcAutoInit();
  }
}





