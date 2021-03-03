import { ProductsService } from './../../services/products.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {

  ref :any;
  product :any;
  qty : any=1;
  constructor(private firestore : ProductsService, private _rout : ActivatedRoute) {


  }



  ngOnInit() {



    this.ref = this._rout.snapshot.paramMap.get('ref');

    this.firestore.getSelectedProduct(this.ref).subscribe(result=>{


      this.product =result;



    })



  }

  subtract()
  {
    if(this.qty>1)
    this.qty=this.qty-1;
  }

  add()
  {
      this.qty=this.qty+1;
  }

}
