import { Component, OnInit } from '@angular/core';
import { disc } from './disc';
import { DiscCart } from '../disc-cart';

@Component({
  selector: 'app-discos-list',
  standalone: false,
  templateUrl: './discos-list.html',
  styleUrl: './discos-list.scss',
})
export class DiscosList implements OnInit {

  discos: disc[] = [
    {
      name: "Alta Suciedad",
      band: 'Andres Calamaro',
      year: 1997,
      stock: 2,
      price: 300000,
      img: "/assets/img/altasuciedad.jpeg",
      clearance: false,
      quantity: 0
    },
    {
      name: "Parte de la Religión",
      band: 'Charly Garcia',
      year: 1987,
      stock: 3,
      price: 450000,
      img: '/assets/img/charly.jpeg',
      clearance: false,
      quantity: 0
    },
    {
      name: "Help!",
      band: 'The Beatles',
      year: 1965,
      stock: 0,
      price: 500000,
      img: "/assets/img/help!.jpeg",
      clearance: true,
      quantity: 0
    },
    {
      name: "Tattoo You",
      band: 'The Rolling Stones',
      year: 1981,
      stock: 0,
      price: 650000,
      img: "/assets/img/tattooyou.jpeg",
      clearance: true,
      quantity: 0
    }
  ];

  constructor(public cart: DiscCart) {}

  ngOnInit(): void {
    this.cart.cargarCatalogo();
    this.discos = this.cart.getDiscos();
  }

  addToCart(disc: disc): void {
    this.cart.addToCart(disc);
  }
}
