import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getAllProducts(): any {

    const products = this.http.get('assets/phones/phones.json');

    return products;
  }

  getProduct(id: string):any {
    const product = this.http.get('assets/phones/'+id+'.json');
    return product;
  }








}




