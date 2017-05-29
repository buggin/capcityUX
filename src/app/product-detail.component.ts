import { Component, Input, AfterViewInit } from '@angular/core';
import { Product } from './product';
const {textfield: mdcTextField} = require('node_modules/material-components-web/dist/material-components-web.js');

@Component({
  selector: 'product-detail',
  template:`
  	<div class="mdc-textfield mdc-textfield--upgraded" data-mdc-auto-init="MDCTextfield">
    	<input [(ngModel)]="product.name" type="text" class="mdc-textfield__input" id="demo-input">
    	<label for="demo-input" class="mdc-textfield__label mdc-textfield__label--float-above">description: </label>
  	</div>
  `
})
export class ProductDetailComponent implements AfterViewInit {
	@Input() product: Product;

	ngAfterViewInit(): void {
		mdcTextField.MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
	}
}
