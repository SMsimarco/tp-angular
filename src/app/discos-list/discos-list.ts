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
    img: "altasuciedad.jpeg",
    clearance: true,
    quantify: 0
  },
  {
    name: "Parte de la Religión",
    band: 'Charly Garcia',
    year: 1987,
    stock: 1,
    price: 450000,
    img: 'charly.jpeg',
    clearance: false,
    quantify: 0
  },
  {
    name: "Help!",
    band: 'The Beatles',
    year: 1965,
    stock: 0,
    price: 500000,
    img: "help!.jpeg",
    clearance: false,
    quantify: 0
  },
  {
    name: "Tattoo You",
    band: 'The Rolling Stones',
    year: 1981,
    stock: 0,
    price: 650000,
    img: "tattooyou.jpeg",
    clearance: true,
    quantify: 0
  }
];

  upQuantity(discos: disc): void {
    if(discos.stock)
    discos.quantify++;
  }

  downQuantity(discos: disc): void {
    if(discos.quantify > 0)
    discos.quantify--;
  }
  
}
