import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { disc } from './discos-list/disc';

@Injectable({
  providedIn: 'root',
})
export class DiscCart {
  private urlDiscos = 'https://6a5a9908ad8332e75f02993a.mockapi.io/discos';

  private discosSubject = new BehaviorSubject<disc[]>([]);
  discos$ = this.discosSubject.asObservable();

  cartList: disc[] = [];

  constructor(private http: HttpClient) {
    this.cargarCatalogo();
  }

  obtenerDiscos(): Observable<disc[]> {
    return this.http.get<disc[]>(this.urlDiscos);
  }

  cargarCatalogo(): void {
    this.obtenerDiscos().subscribe((data) => {
      this.discosSubject.next(data);
    });
  }

  addToCart(disc: disc): void {
    if (disc.quantity > 0) {
      let item: disc | undefined = this.cartList.find((v1) => v1.name == disc.name);
      if (!item) {
        this.cartList.push({ ...disc });
      } else {
        item.quantity += disc.quantity;
      }
      disc.stock -= disc.quantity;
      disc.quantity = 0;
      this.discosSubject.next(this.discosSubject.value);
    }
  }
}