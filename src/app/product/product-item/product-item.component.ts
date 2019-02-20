import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public name: string;
  public price: number;

  constructor() { }

  ngOnInit() {
  this.name = 'Phillips-head Screwdriver'
  this.price = 24;

  }

}
