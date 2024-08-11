import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  //// Products that selected to show on cart
  cartData = signal<Product[]>([]);

  /////  Products List  Data
  allProducts = signal<Product[]>([
    {
      name: 'Waffle',
      title: 'Xaffle with Berries',
      price: 6.5,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-waffle-desktop.jpg',
    },
    {
      name: 'Créme Brulée',
      title: 'Vanilla Bean Créme Brulée',
      price: 7.99,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-creme-brulee-desktop.jpg',
    },
    {
      name: 'Macaron',
      title: 'Macaron Mix of Five',
      price: 8.46,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-macaron-desktop.jpg',
    },
    {
      name: 'Tiramisu',
      title: 'Classic Tiramissu',
      price: 8.46,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-tiramisu-desktop.jpg',
    },
    {
      name: 'Baklava',
      title: 'Pistachio Baklava',
      price: 8.46,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-baklava-desktop.jpg',
    },
    {
      name: 'Pie',
      title: 'Lemon Meringue Pie',
      price: 5.46,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-meringue-desktop.jpg',
    },
    {
      name: 'Cake',
      title: 'Red Velvet Cake',
      price: 4.46,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-cake-desktop.jpg',
    },
    {
      name: 'Brownie',
      title: 'Salted Caramel Brownie',
      price: 4.46,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-brownie-desktop.jpg',
    },
    {
      name: 'Panna Cotta',
      title: 'Vanilla Panna Cotta',
      price: 6.5,
      counter: 0,
      totalPrice: 0,
      selected: false,
      img: './assets/images/image-panna-cotta-desktop.jpg',
    },
  ]);

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  private productSource = new BehaviorSubject<any>(null);
  currentProduct = this.productSource.asObservable();

  getProducts(myProduct: Product[]) {
    this.productSource.next(myProduct);
  }
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  private totalPriceSource = new BehaviorSubject<any>(null);
  currenttotalPrice = this.totalPriceSource.asObservable();

  gettotalPrice(mytotalPrice: number) {
    this.totalPriceSource.next(mytotalPrice);
  }
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  private cartStatus = new BehaviorSubject<any>(null);
  currentCartStatus = this.cartStatus.asObservable();

  getCartStatus(myStatus: boolean) {
    this.cartStatus.next(myStatus);
  }

  ////////////////////////////////////////////////////////////
  //////////  Selecting Products : True  /////////////////////
  ////////////////////////////////////////////////////////////
  toSelectProduct(product: Product) {
    this.allProducts().map((prod) => {
      if (prod.name == product.name) {
        prod.selected = true;
      }
    });
  }

  ////////////////////////////////////////////////////////////
  ///// Filtring Data to show on Cart    /////////////////////
  ////////////////////////////////////////////////////////////
  selectCartProducts() {
    this.cartData.set(
      this.allProducts().filter((product) => {
        return product.selected;
      })
    );
    this.cartData().map(
      (product) => (product.totalPrice = product.price * product.counter)
    );
    console.log(this.cartData());
    this.getProducts(this.cartData());

    ////// Calcul Total Price
    let myTotal = this.cartData().reduce((total, product) => {
      return (total += product.totalPrice);
    }, 0);
    this.gettotalPrice(myTotal);
    //// Check Cart Products is Empty or Not to Get Cart Status
    this.cartData().length == 0
      ? this.getCartStatus(false)
      : this.getCartStatus(true);
  }

  ////////////////////////////////////////////////////////////
  ////////  Increment Product Counter    /////////////////////
  ////////////////////////////////////////////////////////////
  incrementProdCounter(product: Product) {
    this.allProducts().map((prod) => {
      if (prod.name == product.name) {
        prod.counter++;
      }
    });
    this.selectCartProducts();
    // console.log(this.cartData());
  }

  ////////////////////////////////////////////////////////////
  ////////  Decrement Product Counter    /////////////////////
  ////////////////////////////////////////////////////////////
  decrementProdCounter(product: Product) {
    this.allProducts().map((prod) => {
      if (prod.name == product.name && product.counter >= 1) {
        prod.counter--;
      }
      if (prod.name == product.name && product.counter == 0) {
        prod.selected = false;
      }
    });
    this.selectCartProducts();
    // console.log(this.cartData());
  }
}
