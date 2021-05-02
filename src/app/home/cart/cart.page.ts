import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseService } from './../../services/database.service';
import { CartService, Product } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartinfo : any;
  object :any;
  l : any;
  cart :any;
  total:any= 0;
    user : any= localStorage.getItem('userid')
  constructor(private cartService :CartService, private router :Router, ) { }



 async ngOnInit()  {


  // get cart total

  this.calculateTotal()
   //this.cartService.getCart();



      this.cartinfo = this.cartService.getCart();





  }

  add(qty,key)
  {

    qty+=1;

    this.cartService.removeqty(key,qty)

    this.cartinfo = this.cartService.getCart();

    this.calculateTotal();
  }
  subtract(qty,key)
  {
    this.total=0;
    qty-=1;
    if(qty==0)
    {
      this.remove(key);
    }
    else{
    this.cartService.removeqty(key,qty)
    }

    this.cartinfo = this.cartService.getCart();
    this.calculateTotal()
  }

  remove(item)
  {
    this.cartService.removeFromCart(item)
    this.cartinfo = this.cartService.getCart();
    this.calculateTotal()
  }

  placeOrder()
{
  //let now = firebase.default.firestore.Timestamp.fromDate(new Date())
let order ={
    "user": this.user,
    "status": "placed",
    "dateplaced": Date.now(),
    "Products": this.cart,
    "Total": this.total,
    "Paid":false
  }

 // this.router.navigate(["/payfast"])

   //localStorage.setItem("total",this.total);
  console.log(order)

  this.cartService.placeOder(order)


}

calculateTotal()
{
  let next= this.cartService.getCart();
  this.total = 0
  for (let index = 0; index < next.length; index++) {

    this.object=   next[index]



    this.total=this.total+this.object.productPrice*this.object.productQty;




  }
  this.cart= next;
  console.log(next);
 console.log(this.total);
}

}
