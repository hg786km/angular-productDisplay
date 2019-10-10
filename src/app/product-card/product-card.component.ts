import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'
import { Product } from "../models/Product";
import { Score } from '../models/Score'
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  product:Product;

  constructor(private productService:ProductService) {  }

  ngOnInit() {

    this.productService.getProduct().subscribe(product => {
      this.product=product;
    });
  }

}
