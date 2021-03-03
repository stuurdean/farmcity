import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productby-category',
  templateUrl: './productby-category.page.html',
  styleUrls: ['./productby-category.page.scss'],
})
export class ProductbyCategoryPage implements OnInit {
  ref :any;
product: any;
productLength: any;
  constructor( private _rout :ActivatedRoute, private fire :ProductsService) { }

  ngOnInit() {
    this.ref = this._rout.snapshot.paramMap.get('ref');
    this.fire.getbyCategory(this.ref).snapshotChanges().subscribe(result=>{

      this.product= result
      this.productLength= result.length

    })
  }

}
