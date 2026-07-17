import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DiscosList } from './discos-list/discos-list';
import { FormsModule } from '@angular/forms';
import { DiscsAbout } from './discs-about/discs-about';
import { ShopDiscs } from './shop-discs/shop-discs';
import { Cart } from './cart/cart';
import { InputNumber } from './input-number/input-number';

@NgModule({
  declarations: [App, DiscosList, DiscsAbout, ShopDiscs, Cart, InputNumber],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App],
})
export class AppModule {}