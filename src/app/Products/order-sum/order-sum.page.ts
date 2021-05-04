import { CartService } from './../../services/cart.service';
import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-sum',
  templateUrl: './order-sum.page.html',
  styleUrls: ['./order-sum.page.scss'],
})
export class OrderSumPage implements OnInit {

  total :any;
  delivery : any;
  subtot : any;
  user : any;
  Cart : any;
  userid : any= localStorage.getItem('userid');
  constructor(private _service :UserService, private _cartservice : CartService) { }

  ngOnInit() {

    this.Cart = this._cartservice.getCart();
    this._service.user().subscribe(red=>{
      this.user = red

    })
    this.total= parseFloat( localStorage.getItem("total"));

    if(this.total>299)
    {
      this.delivery=0
      this.subtot=this.total+this.delivery;
    }
    else{

      this.delivery= 60
      this.subtot=this.total+this.delivery;
    }


  }
order()
{
  let orders ={
    "user": this.userid,
    "names":this.user.name +" "+ this.user.surname,
    "contact": this.user.phone,
    "Address": this.user.address,
    "status": "placed",
    "dateplaced": Date.now(),
    "Products": this.Cart,
    "Total": this.subtot,
    "Paid":false
  }

  console.log(orders)

  this._cartservice.placeOder(orders)
}


}
