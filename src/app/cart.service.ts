import { Injectable } from '@angular/core';
import {products} from './Products';

import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})

export class CartService {
  product;
  items = [];
    constructor(
       private http: HttpClient
    ) { }
    
  addToCart(product){
    this.items.push(product);
  }  

  getItem(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

   gSPrices() {
    return this.http.get('/assets/shipping.json');
  }

}