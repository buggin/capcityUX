import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product }           from './product';

@Injectable()
export class ProductSearchService {
	private apiUrl = 'http://127.0.0.1:3000/'
  constructor(private http: Http) {}
  search(term: string): Observable<Product[]> {
  	const url = `${this.apiUrl}/products`;
    return this.http
               .get(`${url}/?name=${term}`)
               .map(response => response.json() as Product[]);
  }
}