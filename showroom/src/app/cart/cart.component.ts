import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product} from '../product-list/Product';
import { Observable} from 'rxjs';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartList$: Observable<Product[]>;

  constructor(private cart: ProductCartService){
    this.cartList$= cart.cartList.asObservable();
  }

  ngOnInit(): void{
    
  }

  deleteToCart(product: Product): void{
    this.cart.deleteToCart(product);
  }



}
