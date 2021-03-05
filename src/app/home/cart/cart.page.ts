import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartinfo=[]
  constructor(private cartService :CartService) { }

  ngOnInit() {

     this.cartinfo=this.cartService.getCart()
  }

  add(product)
  {
    this.cartService.addTocart(product)
  }
  subtract(item)
  {
    this.cartService.removeqty(item)
  }

  remove(item)
  {
    this.cartService.removeFromCart(item)
  }



}
