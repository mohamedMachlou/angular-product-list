import { Product } from '../../models/product';
import { ProductsDataService } from './../../services/products-data.service';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css',
})
export class ShowProductComponent implements OnInit {
  // products: any[] = [];
  products = signal<Product[]>([]);
  cartData = signal<Product[]>([]);
  selected = signal<boolean>(false);
  popUpStatus = signal<boolean>(false);
  orderTotal = signal<number>(0);

  /// Injection Services
  productsDataService = inject(ProductsDataService);

  ngOnInit(): void {
    this.getAllProducts();
    this.getPopupStatus();
    this.getCartData();
    this.getTotalOrder();
  }

  /// Get All Products To Show
  getAllProducts() {
    this.products.set(this.productsDataService.allProducts());
    // this.products = this.productsDataService.allProducts;
  }

  // Add To Cart
  addToCart(product: any) {
    this.productsDataService.addToCart(product);
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
  //////////////////////////////////////////////////////////////
  /////////  Get pop-Up Status Active : True/ False  ///////////
  //////////////////////////////////////////////////////////////
  getPopupStatus() {
    this.productsDataService.currentpopupStatus.subscribe((status) => {
      this.popUpStatus.set(status);
    });
  }
  ////////////////////////////////////////////////////////////////
  /// Start New Order Btn to Deactive Pop-up      ////////////////
  ////////////////////////////////////////////////////////////////
  deactivePopUp() {
    this.productsDataService.getPopupStatus(false);
  }

  ////////////////////////////////////////////////////////////////
  /// Get Cart Products From Products Data Service    ////////////
  ////////////////////////////////////////////////////////////////
  getCartData() {
    this.productsDataService.currentProduct.subscribe((products) => {
      {
        this.cartData.set(products);
      }
    });
  }
  ////////////////////////////////////////////////////////////
  ////// Get Products Order Total  ///////////////////////////
  ////////////////////////////////////////////////////////////
  getTotalOrder() {
    this.productsDataService.currenttotalPrice.subscribe((totalPrices) => {
      this.orderTotal.set(totalPrices?.toFixed(2));
    });
  }
}
