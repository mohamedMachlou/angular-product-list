import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmPopUpComponent } from './components/confirm-pop-up/confirm-pop-up.component';

@NgModule({
  declarations: [ShowProductComponent, CartComponent, ConfirmPopUpComponent],
  imports: [CommonModule],
  exports: [ShowProductComponent, CartComponent, ConfirmPopUpComponent],
  providers: [
    {
      provide: 'experimentalFeatures',
      useValue: { zonelessChangeDetection: true },
    },
  ],
})
export class ProductListModule {}
