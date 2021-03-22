import { DatabaseService } from './../../services/database.service';
import { CartService, Product } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartinfo : any;
  object :any;
  l : any;
  cart :[];
  total:any= 0;
    user : any= localStorage.getItem('userid')
  constructor(private cartService :CartService) { }



  ngOnInit()  {


  // get cart total

  this.cartService.getCart().valueChanges().subscribe(next=>{

    this.total = 0
   for (let index = 0; index < next.length; index++) {

     this.object=   next[index]

     this.total=this.total+this.object.productPrice*this.object.productQty;


   }

   console.log(this.total)

  })




   this.cartService.getCart().snapshotChanges().subscribe(res=>{



      this.cartinfo = res;


       


     })




  }

  add(qty,key)
  {
    this.total=0;
    qty+=1;

    this.cartService.removeqty(key,qty)
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
  }

  remove(item)
  {
    this.cartService.removeFromCart(item)
  }

  placeOrder()
{
let order ={
    "user": this.user,
    "status": "placed",
    "dateplaced": Date.now(),
    "Products": this.object,
    "Total": this.total,
    "Paid":false
  }
  console.log(order)

  this.cartService.placeOder(order)

}

}
