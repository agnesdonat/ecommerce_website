import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public name: string;
  public price: number;
  public onSale: boolean;

  constructor() { }

  ngOnInit() {
  this.name = 'Phillips-head Screwdriver'
  this.price = 24;
  this.onSale = true;
  }

}
