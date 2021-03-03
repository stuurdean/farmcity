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
  constructor(private firestore : ProductsService, private _rout : ActivatedRoute) { }

  ngOnInit() {

    this.ref = this._rout.snapshot.paramMap.get('ref');

    this.firestore.getSelectedProduct(this.ref).subscribe(result=>{

      
    })


  }

}
