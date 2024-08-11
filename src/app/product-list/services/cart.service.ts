import { ProductsDataService } from './products-data.service';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //// Injection Services
  productsDataService = inject(ProductsDataService);

  /// Filter Data to show on Cart
  // selectCartProducts() {
  //   this.productsSelected.set(
  //     this.productsDataService.allProducts.filter((product) => {
  //       return product.selected == true;
  //     })
  //   );
  // }
}
