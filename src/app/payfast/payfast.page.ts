import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payfast',
  templateUrl: './payfast.page.html',
  styleUrls: ['./payfast.page.scss'],
})
export class PayfastPage implements OnInit {
total : any;
id :any;
details: any;
  constructor(private cartService :CartService,private _rout : ActivatedRoute,) { }

  ngOnInit() {
    this.id = this._rout.snapshot.paramMap.get('ref');
    this.cartService.EachOrder().doc(this.id).valueChanges().subscribe(res=>{


      this.details= res;
      this.total= Math.round( this.details.Total*100)/100


    })



  }
update(){

  this.cartService
}


}
