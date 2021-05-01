import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oders-list',
  templateUrl: './oders-list.page.html',
  styleUrls: ['./oders-list.page.scss'],
})
export class OdersListPage implements OnInit {

  constructor(private cartservice : CartService ) { }

  Orders: any;
  orderlength: any;
  ngOnInit() {

    this.cartservice.getOrders().snapshotChanges().subscribe(result=>{


      this.Orders=result;

      this.orderlength = result.length


    })


  }

}
