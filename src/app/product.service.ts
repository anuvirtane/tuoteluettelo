import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products;

  constructor(private http: HttpClient) { }

  getAllProducts(): any {
    const products = this.http.get('assets/phones/dell-streak-7.json');
    console.log(products);
    return products;
  }


}




