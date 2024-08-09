import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  /////  Products List  Data
  allProducts = [
    {
      name: 'Waffle',
      title: 'Xaffle with Berries',
      price: 6.5,
      counter: 0,
      selected: false,
      img: './assets/images/image-waffle-desktop.jpg',
    },
    {
      name: 'Créme Brulée',
      title: 'Vanilla Bean Créme Brulée',
      price: 7.99,
      counter: 0,
      selected: false,
      img: './assets/images/image-creme-brulee-desktop.jpg',
    },
    {
      name: 'Macaron',
      title: 'Macaron Mix of Five',
      price: 8.46,
      counter: 0,
      selected: false,
      img: './assets/images/image-macaron-desktop.jpg',
    },
    {
      name: 'Tiramisu',
      title: 'Classic Tiramissu',
      price: 8.46,
      counter: 0,
      selected: false,
      img: './assets/images/image-tiramisu-desktop.jpg',
    },
    {
      name: 'Baklava',
      title: 'Pistachio Baklava',
      price: 8.46,
      counter: 0,
      selected: false,
      img: './assets/images/image-baklava-desktop.jpg',
    },
    {
      name: 'Pie',
      title: 'Lemon Meringue Pie',
      price: 5.46,
      counter: 0,
      selected: false,
      img: './assets/images/image-meringue-desktop.jpg',
    },
    {
      name: 'Cake',
      title: 'Red Velvet Cake',
      price: 4.46,
      counter: 0,
      selected: false,
      img: './assets/images/image-cake-desktop.jpg',
    },
    {
      name: 'Brownie',
      title: 'Salted Caramel Brownie',
      price: 4.46,
      counter: 0,
      selected: false,
      img: './assets/images/image-brownie-desktop.jpg',
    },
    {
      name: 'Panna Cotta',
      title: 'Vanilla Panna Cotta',
      price: 6.5,
      counter: 0,
      selected: false,
      img: './assets/images/image-panna-cotta-desktop.jpg',
    },
  ];

  /// Mark Selected Products
  toSelectProduct(product: any) {
    this.allProducts.map((prod) => {
      if (prod.name == product.name) {
        prod.selected = true;
      }
    });
  }
}
