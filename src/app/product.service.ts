import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getAllProducts(): any {

/*
    this.http.get('assets/phones/phones.json').subscribe(
      data => {
        this.products.push(data);
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    ) */


    const products = this.http.get('assets/phones/phones.json');

    console.log("product service says: " + products);

    return products;
  }


}




