import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service'
import { Router } from '@angular/router';
const mdcTextField = require('@material/textfield');
const mdcRipple = require('@material/ripple');
const mdcAutoInit = require('@material/auto-init')

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
	products: Product[];
	selectedProduct: Product;
	constructor(
		private productService: ProductService,
		private router:Router
	) { }
	
	onSelect(product: Product): void {
  	this.selectedProduct = product;
  	setTimeout(() => mdcRipple.MDCRipple.attachTo(document.querySelector('.mdc-button')), 0);
	}

	getProducts(): void {
   	this.productService.getProducts().then(
   		products => {
   			this.products = products;
   			setTimeout(() => this.animateList(), 0);
   		}
   	);
  }

  add(name: string, desc: string): void {
    name = name.trim();
    if (!name || !desc) { return; }
    this.productService.create(name, desc)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
        setTimeout(() => mdcRipple.MDCRipple.attachTo(document.querySelector(`#product${product.id}`)), 0);
      });
  }

  delete(product: Product): void {
    this.productService
        .delete(product.id)
        .then(() => {
          this.products = this.products.filter(p => p !== product);
          if (this.selectedProduct === product) { this.selectedProduct = null; }
        });
  }

  animateList(){
    mdcAutoInit.default.register('MDCTextfield', mdcTextField.MDCTextfield);
  	mdcAutoInit.default.register('MDCRipple', mdcRipple.MDCRipple);
  	mdcAutoInit.default();
  }

  gotoDetail(): void{
  	this.router.navigate(['/detail', this.selectedProduct.id]);
  }
  
  ngOnInit(): void {
  	this.getProducts();
  }
  ngOnDestroy(){
  	mdcAutoInit.default.deregisterAll()
  }
}





