
import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {

  id :any;
  product :any;
  addproduct: any;
  qty : any=1;
  cart=[];
  constructor(private firestore : ProductsService, private _rout : ActivatedRoute,
    private _cartservice :CartService,private storage: Storage , private strore :Storage) {


  }




  ngOnInit() {



    this.id = this._rout.snapshot.paramMap.get('ref');

    this.firestore.getSelectedProduct(this.id).subscribe(result=>{


      this.product =result;



    })


   // this.cart=this._cartservice.getCart();

    console.log(this.cart)



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

 addToCart()
  {


    this.addproduct={'id' : this.id,
      'productName' : this.product.productName,
      'productPrice' : this.product.productPrice,
      'productImage' : this.product.productImage,
      'productQty': this.qty,
      'userid':localStorage.getItem("userid")};

      this._cartservice.cartcart(this.addproduct);



  }

}
