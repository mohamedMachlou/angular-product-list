import { CartService } from './../../services/cart.service';
import { ProductsDataService } from './../../services/products-data.service';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css',
})
export class ShowProductComponent implements OnInit {
  // products: any[] = [];
  products = signal<any[]>([]);
  selected = signal<boolean>(false);

  /// Injection Services
  productsDataService = inject(ProductsDataService);
  cartService = inject(CartService);

  ngOnInit(): void {
    this.getAllProducts();
  }

  /// Get All Products To Show
  getAllProducts() {
    this.products.set(this.productsDataService.allProducts());
    // this.products = this.productsDataService.allProducts;
  }

  // Add To Cart
  addToCart(product: any) {
    this.productsDataService.toSelectProduct(product);
    product.counter = 1;
    this.selectCartProd();
  }

  /// Increment Number of Product
  incrementNbProd(product: any) {
    this.productsDataService.incrementProdCounter(product);
  }

  /// Increment Number of Product
  decrementNbProd(product: any) {
    this.productsDataService.decrementProdCounter(product);
  }

  //// Selected Cart's Products
  selectCartProd() {
    this.productsDataService.selectCartProducts();
  }
}
