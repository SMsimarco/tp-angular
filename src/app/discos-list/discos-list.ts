import { Component } from '@angular/core';
import { disc } from './disc';

@Component({
  selector: 'app-discos-list',
  standalone: false,
  templateUrl: './discos-list.html',
  styleUrl: './discos-list.scss',
})
export class DiscosList {

  discos: disc[] = [ 
  {
    name: "Alta Suciedad",
    band: 'Andres Calamaro',
    year: 1997,
    stock: 1,
    price: 300000,
    img: "assets/img/charly.jpeg",
    clearance: true,
  },
  {
    name: "Parte de la Religión",
    band: 'Charly Garcia',
    year: 1987,
    stock: 1,
    price: 450000,
    img: "assets/img/charly.jpeg",
    clearance: false,
  },
  {
    name: "Help!",
    band: 'The Beatles',
    year: 1965,
    stock: 0,
    price: 500000,
    img: "assets/img/charly.jpeg",
    clearance: false,
  },
  {
    name: "Tattoo You",
    band: 'The Rolling Stones',
    year: 1981,
    stock: 0,
    price: 650000,
    img: "assets/img/charly.jpeg",
    clearance: true,
  }
];
}
