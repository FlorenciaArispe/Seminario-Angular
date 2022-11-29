import { Component, OnInit } from '@angular/core';
import { Product} from './Product';
import{ ProductCartService} from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  
  products: Product[]= [];

  constructor(private cart: ProductCartService,
    private productsDataService: ProductDataService){
  }
  
  ngOnInit(): void{
    this.productsDataService.getAll().
    subscribe(products=> this.products= products);
    this.cart.product.subscribe(response=>{
      this.deleteToCart(response);
    });
  }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity=0;
  }

  deleteToCart(product: Product): void{
    let item= this.products.find((v1) =>v1.id == product.id)!;
    item.stock+= product.quantity;
  }
  

}
