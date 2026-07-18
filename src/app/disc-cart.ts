import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { disc } from './discos-list/disc';

@Injectable({
  providedIn: 'root',
})
export class DiscCart {
  private urlDiscos = 'https://6a5a9908ad8332e75f02993a.mockapi.io/discos';

  // store plano: mismo array en memoria para todos los componentes (singleton)
  private discos: disc[] = [];

  cartList: disc[] = [];

  constructor(private http: HttpClient) {}

  getDiscos(): disc[] {
    return this.discos;
  }

  obtenerDiscos(): Observable<disc[]> {
    return this.http.get<disc[]>(this.urlDiscos);
  }

  cargarCatalogo(): void {
    // solo pide a la API si todavía no hay datos cargados
    if (this.discos.length === 0) {
      this.obtenerDiscos().subscribe((data) => {
        // push mantiene la misma referencia de array, no reasignar (this.discos = data)
        this.discos.push(...data);
      });
    }
  }

  addToCart(disc: disc): void {
    if (disc.quantity > 0) {
      let item: disc | undefined = this.cartList.find((v1) => v1.name == disc.name); //no me dejaba sin undefined poner item solo
      if (!item) {
        this.cartList.push({ ...disc });
      } else {
        item.quantity += disc.quantity;
      }
      disc.stock -= disc.quantity;
      disc.quantity = 0;
    }
  }
}