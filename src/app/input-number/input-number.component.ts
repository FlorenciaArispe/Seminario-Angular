import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product} from '../product-list/Product';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

constructor() { 
  
} 

@Input()
quantity!: number;

@Input()
max!: number;

@Output()
quantityChange: EventEmitter<number>= new EventEmitter<number>();

ngOnInit(): void{}

upQuantity(): void{
  if(this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
  
}

downQuantity(): void{
  if(this.quantity>0){
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
}

changeQuantity(event :any): void {
  console.log(event.target);
  this.quantityChange.emit(this.quantity);
}
}