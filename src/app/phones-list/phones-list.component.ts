import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {

  title = 'Phones';
  filter= '';



  productsList: any[];
  selectedSort: string = '';


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

  sortBy(event: any) {
    this.selectedSort = event.target.value;
    if (this.selectedSort =="name") {
    this.productsList.sort(function(a, b) {
      if (a.name>b.name)
      return 1;
      else if (a.name<b.name)
      return -1;
      return 0;
  });}
    else if (this.selectedSort=="age") {
      this.productsList.sort(function(a, b) {
        return parseInt(b.age) - parseInt(a.age);
    });
    }
  }



}
