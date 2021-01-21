import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
phoneId: string = '';
productsList: any[];
chosenPhone: any = "";

  constructor(  private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {

        this.phoneId = params['id'];
      }
    );
this.productService.getProduct(this.phoneId).subscribe(
  data => {this.chosenPhone = data;}
)





  }




  goBack(): void {
    this.location.back();
  }

}
