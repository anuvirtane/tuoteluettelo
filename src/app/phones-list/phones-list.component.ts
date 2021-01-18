import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {

  title = 'tuoteluettelo';
  filter= '';

  sortBy = "name";

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
