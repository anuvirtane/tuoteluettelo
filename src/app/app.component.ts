import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tuoteluettelo';

  productsList: any[];
  testProduct: string = "TestProduct3874";

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts()
        .subscribe(data => { this.productsList = data;
          console.log(data);},
          error => {console.log("http-error:");
          console.log(error);});
  }
}




