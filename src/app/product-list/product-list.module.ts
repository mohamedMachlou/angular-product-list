import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [ShowProductComponent, CartComponent],
  imports: [CommonModule],
  exports: [ShowProductComponent, CartComponent],
  providers: [
    {
      provide: 'experimentalFeatures',
      useValue: { zonelessChangeDetection: true },
    },
  ],
})
export class ProductListModule {}
