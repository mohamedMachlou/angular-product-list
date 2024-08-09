import { ProductsDataService } from './../../services/products-data.service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css',
})
export class ShowProductComponent {
  products = signal<object[]>([]);

  /// Injection Services
  productsDataService = inject(ProductsDataService);

  /// Get All Products To Show
  getAllProducts() {
    this.products.set(this.productsDataService.allProducts);
  }
}
