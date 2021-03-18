import { DatabaseService } from './../../services/database.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartinfo : any;
  object :any;
  user : any= localStorage.getItem('')
  constructor(private cartService :CartService) { }

  

  ngOnInit()  {

     this.cartService.getCart().snapshotChanges().subscribe(res=>{

      this.cartinfo = res;
     })

     let test = JSON.parse(localStorage.getItem("cart") || "[]");
     

    console.log(test)

  }

  add(qty,key)
  {
    qty+=1;

    this.cartService.removeqty(key,qty)
  }
  subtract(qty,key)
  {
    qty-=1;
    this.cartService.removeqty(qty,key)
  }

  remove(item)
  {
    this.cartService.removeFromCart(item)
  }



}
