import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe((
      map(response => response._embedded.products )
    ))
  }
}

interface GetResponse {
  _embedded:{
    products: Product[];
  }
}
