import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  constructor() {}

  ngOnInit() {
  this.product = new Product('Phillips-head Screwdriver', 24, true, 0);
  }

  addProduct(event) {
    this.product.quantity += 1;
  }

  removeProduct(event) {
    if (this.product.quantity > 0) {
    this.product.quantity -= 1;
    }
  }

}
