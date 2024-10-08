import { ProductsDataService } from './../../services/products-data.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartProducts = signal<Product[]>([]);
  orderTotal = signal<number>(0);
  cartNumber = signal<number>(0);
  cartStatus = signal<boolean>(false);

  //// Injection Services
  productsDataService = inject(ProductsDataService);

  ngOnInit(): void {
    ////////////////////////////////////////////////////////////////
    ////// Get Cart Products those have "Setected: True"  //////////
    ////////////////////////////////////////////////////////////////
    this.productsDataService.currentProduct.subscribe((products) => {
      this.cartProducts.set(products);
      if (this.cartProducts()?.length > 0) {
        this.cartNumber.set(this.cartProducts()?.length);
      } else {
        this.cartNumber.set(0);
      }
    });

    ////////////////////////////////////////////////////////////
    ////// Get Products Order Total  ///////////////////////////
    ////////////////////////////////////////////////////////////
    this.productsDataService.currenttotalPrice.subscribe((totalPrices) =>
      this.orderTotal.set(totalPrices?.toFixed(2))
    );
    ////////////////////////////////////////////////////////////
    //////     Get Cart Status       ///////////////////////////
    ////////////////////////////////////////////////////////////
    this.productsDataService.currentCartStatus.subscribe((status) =>
      this.cartStatus.set(status)
    );
  }

  ////////////////////////////////////////////////////////////////
  //////////  Delete Product      ////////////////////////////////
  ////////////////////////////////////////////////////////////////
  deleteProduct(product: Product) {
    this.productsDataService.deleteProduct(product);
  }

  ////////////////////////////////////////////////////////////////
  /////// Corfirm Btn to Active Pop-up      //////////////////////
  ////////////////////////////////////////////////////////////////
  activePopUp() {
    this.productsDataService.getPopupStatus(true);
  }
}
