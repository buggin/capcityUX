import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1 class="mdc-typography--display1">{{title}}</h1>
	<h2 class="mdc-typography--display2">My products</h2>
	<div class="mdc-grid-list">
	  <ul class="mdc-grid-list__tiles">
	    <li *ngFor="let product of products" class="mdc-grid-tile" (click)="onSelect(product)">
	      <div class="mdc-grid-tile__primary">
	        <div class="mdc-grid-tile__primary-content my-tile-image">{{product.name}}</div>
	      </div>
	      <span class="mdc-grid-tile__secondary">
	        <span class="mdc-grid-tile__title">{{product.description}}</span>
	      </span>
	    </li>
	  </ul>
	</div>
  <div *ngIf="selectedProduct" class="mdc-textfield mdc-textfield--upgraded" data-mdc-auto-init="MDCTextfield">
    <input [(ngModel)]="selectedProduct.name" type="text" class="mdc-textfield__input" id="demo-input">
    <label for="demo-input" class="mdc-textfield__label mdc-textfield__label--float-above">description: </label>
  </div>
  	`,
})
export class AppComponent implements AfterViewInit {
	title = "NGA Products"; 
	products = PRODUCTS;
	selectedProduct = this.products[0];
	
	onSelect(product: Product): void {
  		this.selectedProduct = product;
  		
	}
	ngAfterViewInit(): void {
    //do something  
   	mdc.autoInit();
  }
}
export class Product {
	name: string;
	description: string;
}

const PRODUCTS: Product[] = [
	{
		name: 'hrX',
  		description: 'Awesome product' 
  	},
  	{
		name: 'PEX',
  		description: 'Payroll exchange' 
  	},
  	{
		name: 'CS',
  		description: 'Clear Sky' 
  	}
]




