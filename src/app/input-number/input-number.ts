import { Component, Input, Output } from '@angular/core';
import { disc } from '../discos-list/disc';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.html',
  styleUrl: './input-number.scss',
})
export class InputNumber {
  @Input()
  quantity!: number;
  
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  upQuantity(): void {
    if (this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0)
      this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  ChangeQuantity(event: KeyboardEvent): void { //especifique keyBoardEvent porque me tiraba error
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
