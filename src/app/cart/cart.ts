import { Component } from '@angular/core';
import { DiscCart } from '../disc-cart';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  constructor(public cart: DiscCart) {}
}