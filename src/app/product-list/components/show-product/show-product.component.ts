import { ProductsDataService } from './../../services/products-data.service';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css',
})
export class ShowProductComponent implements OnInit {
  products: any[] = [];
  selected = signal<boolean>(false);

  /// Injection Services
  productsDataService = inject(ProductsDataService);

  ngOnInit(): void {
    this.getAllProducts();
  }

  /// Get All Products To Show
  getAllProducts() {
    this.products = this.productsDataService.allProducts;
  }

  // Add To Cart
  addToCart(product: any) {
    this.productsDataService.toSelectProduct(product);
    this.getAllProducts();
  }
}
