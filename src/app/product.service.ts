import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {
	getProducts(): Promise<Product[]> {
		return Promise.resolve(PRODUCTS);
	}

	getProductsSlowly(): Promise<Product[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getProducts()), 2000);
		});
	}
}
