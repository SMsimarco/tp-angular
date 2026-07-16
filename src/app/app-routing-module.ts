import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDiscs } from './shop-discs/shop-discs';
import { DiscsAbout } from './discs-about/discs-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'discos',
    pathMatch: 'full'
  },
  {
    path: 'discos',
    component: ShopDiscs
  },
  {
    path: 'about',
    component: DiscsAbout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
