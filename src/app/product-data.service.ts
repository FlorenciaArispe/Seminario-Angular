import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { Product} from './product-list/Product'

const URL = 'https://6384f5ac4ce192ac6068a3de.mockapi.io/api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

    public getAll(): Observable<Product[]> {
      
      return this.http.get<Product[]>(URL)
                 .pipe(
                  tap((product :Product[])=> product.forEach(product =>product.quantity=0))
                  );
  }
}
