import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductListModule],
  providers: [
    {
      provide: 'experimentalFeatures',
      useValue: { zonelessChangeDetection: true },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
