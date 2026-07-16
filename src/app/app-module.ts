import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DiscosList } from './discos-list/discos-list';
import { FormsModule } from '@angular/forms';
import { DiscsAbout } from './discs-about/discs-about';
import { ShopDiscs } from './shop-discs/shop-discs';
import { Cart } from './cart/cart';

@NgModule({
  declarations: [App, DiscosList, DiscsAbout, ShopDiscs, Cart],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
