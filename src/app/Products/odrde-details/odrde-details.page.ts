import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-odrde-details',
  templateUrl: './odrde-details.page.html',
  styleUrls: ['./odrde-details.page.scss'],
})
export class OdrdeDetailsPage implements OnInit {

id :any;
details: any;
  constructor( private cartService :CartService,private _rout : ActivatedRoute,) { }

  ngOnInit() {

    this.id = this._rout.snapshot.paramMap.get('ref');

    this.cartService.EachOrder().doc(this.id).valueChanges().subscribe(res=>{


      this.details= res;


    })

  }

}
