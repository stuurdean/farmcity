import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface Product {

  id : string;
  productName : string;
  producyPrice : any;
  productQty : any;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {



  private cart=[];
  private cartItemCount = new BehaviorSubject(0);
  user : any = localStorage.getItem("userid")

  constructor(public toastController :ToastController,private _fire: AngularFirestore,public _route : Router, ) {

    if(localStorage.getItem('products'))
    {
      this.cart = JSON.parse(localStorage.getItem('products'));

      this.cartItemCount.next(this.cart.length)
    }



   }
    dockey :any;
   lengthD : any;




  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Product Successfull added To Cart.',
      duration: 2000,
      animated:true
    });
    toast.present();
  }



  getCart()
  {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
  getCartCount(){

   return this.cartItemCount
  }
  cartcart(product)
{

    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products')) || [];

     let   item = products.find(item => item.id == product.id);

      if (item) {

      item.productQty += product.productQty;

          console.log(item)
      }
      else{

        products.push(product)

      }
    }
    else{
      products.push(product);


    }

    localStorage.setItem('products', JSON.stringify(products));
    this.cartItemCount.next(products.length)
    console.log(products)

    this.presentToast();


}

  addTocart(product)
  {


        this._fire.collection("Cart").add(product).then(res=>{

          console.log("Added")
        })
        this.cartItemCount.next(this.cartItemCount.value+1)



    this.presentToast();

  }


  removeqty(key,qty)
  {

      // retrieve it (Or create a blank array if there isn't any info saved yet),
      var items = JSON.parse(localStorage.getItem('products')) || [];


      // add to it, only if it's empty
      var item = items.find(item => item.id === key);

      if (item) {
        item.productQty = qty;
      }

      // then put it back.
      localStorage.setItem('products', JSON.stringify(items));
      console.log(items);

    console.log(key)


  }

  removeFromCart(id)
  {
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.id !== id );
    localStorage.setItem('products', JSON.stringify(products));
    this.cartItemCount.next(this.cartItemCount.value-1)
  }

  remove()
  {
    this._fire.collection("Cart")

    this._fire.collection("Cart",ref=> ref.where("userid",'==',this.user)).snapshotChanges().subscribe(res=>{



      res.map(action=>{

          this._fire.collection("Cart").doc(action.payload.doc.id).delete();



        })



    })
  }

  updates(id)
  {
    this._fire.collection("Orders").doc(id).update({

      "Paid":true
    }

    )
  }

  placeOder(oder)
  {
      const key =Date.now().toString();
 this._fire.collection("Orders").doc(key).set(oder).then(res=>

  {

    console.log(key)

    localStorage.removeItem("products")
    this._route.navigate(['payfast',key])
  }
 )





  }

  getOrders()
  {


    return this._fire.collection("Orders",ref=> ref.where("user",'==',this.user))

  }

  EachOrder()
  {
    return this._fire.collection("Orders")
  }

}
