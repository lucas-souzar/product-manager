import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.productService
    .listFromUser(userName)
    .subscribe(products => this.products = products);
  }

  displayedColumns: string[] = ['id', 'description', 'value', 'brand'];

}
