import { Injectable } from '@angular/core';
import { Product } from './product';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
	private apiUrl = 'http://127.0.0.1:3000/'
	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http: Http) { }

	getProducts(): Promise<Product[]> {
		//return Promise.resolve(PRODUCTS);
		const url = `${this.apiUrl}/products`;
		return this.http.get(url)
               .toPromise()
               .then(response => 
               		response.json() as Product[]
               	)
               .catch(this.handleError);
	}

	getProductsSlowly(): Promise<Product[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getProducts()), 2000);
		});
	}
	getProduct(id: number): Promise<Product> {
		const url = `${this.apiUrl}/products/${id}`;
  	return this.http.get(url)
	    .toPromise()
	    .then(response => response.json() as Product)
	    .catch(this.handleError);
	}

	update(product: Product): Promise<Product> {
	  const url = `${this.apiUrl}/products/${product.id}`;
	  return this.http
	    .put(url, JSON.stringify(product), {headers: this.headers})
	    .toPromise()
	    .then(() => product)
	    .catch(this.handleError);
	}

	create(name: string, desc: string): Promise<Product> {
		const url = `${this.apiUrl}/products`;
	  return this.http
	    .post(url, JSON.stringify({name: name, description: desc}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json() as Product)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.apiUrl}/products/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
