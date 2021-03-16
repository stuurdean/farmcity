import { DatabaseService } from './../../services/database.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartinfo=[]
  constructor(private cartService :CartService,private sql :DatabaseService) { }

  ngOnInit() {

     this.cartinfo=this.sql.getall()
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
