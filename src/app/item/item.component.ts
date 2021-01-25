import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  phoneId: string = '';
  productsList: any[];
  chosenPhone: any = '';
  faCheck = faCheck;
  faMinus = faMinus;
  newImgSrc: string = '';
  allReady: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];

    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });
    this.productService.getProduct(this.phoneId).subscribe((data) => {
      this.chosenPhone = data;
      this.allReady = true;
    });


  }

  goBack(): void {
    this.location.back();
  }

  changeImg(event: any) {
    this.newImgSrc = event.target.getAttribute('src');
    document.getElementById('view-img').setAttribute('src', this.newImgSrc);
  }
}
