import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from './product';
import { ProductService } from './product.service'
import 'rxjs/add/operator/switchMap';
const mdcTextField = require('@material/textfield');
const mdcRipple = require('@material/ripple');
const mdcAutoInit = require('@material/auto-init')

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
	product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
        this.productService.getProduct(+params['id'])
       )
      .subscribe(product => {
        this.product = product;
        setTimeout(() => this.initializeElements(), 0);
      }
    );
  }
  ngOnDestroy(){
    mdcAutoInit.default.deregisterAll()
  }
  initializeElements(){
    mdcAutoInit.default.register('MDCRipple', mdcRipple.MDCRipple);
    mdcAutoInit.default.register('MDCTextfield', mdcTextField.MDCTextfield);
    mdcAutoInit.default();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }

}
