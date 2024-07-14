import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts("https://reqres.in/api/users", { page: 1, per_page: 5 })
    .subscribe((products) => {
      console.log(products)
      this.products = products.data;
    })
  }
}
