import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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

  constructor(public toastController :ToastController,private _fire: AngularFirestore ) {

    this._fire.collection("Cart",ref=> ref.where("userid",'==',this.user)).valueChanges().subscribe(res=>{

      this.cartItemCount.next(res.length)
    })

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
    return this._fire.collection("Cart",ref=> ref.where("userid",'==',this.user))
  }
  getCartCount(){

   return this.cartItemCount
  }


  addTocart(product)
  {

 return   this._fire.collection("Cart",ref=> ref.where("id",'==',product.id).where("userid",'==',this.user)).valueChanges().subscribe(res=>{

     

      if(res.length==0)
      {
        this._fire.collection("Cart").add(product).then(res=>{

          console.log("Added")
        })
        this.cartItemCount.next(this.cartItemCount.value+1)
      }
      else{



      }

    })


    this.presentToast();

  }


  removeqty(key,qty)
  {
    console.log(key)
      this._fire.collection("Cart").doc(key).update({
        "productQty":qty
      }).then( res => {

      }).catch(err => {
        console.log(err.message)
      })
  }

  removeFromCart(product)
  {
    this._fire.collection("Cart").doc(product).delete();
  }

  remove()
  {

  return  this._fire.collection("Cart",ref=> ref.where("userid",'==',this.user)).snapshotChanges().subscribe(res=>{


        res.map(action=>{

          this._fire.collection("Cart").doc(action.payload.doc.id).delete();



        })


    })
  }

  placeOder(oder)
  {
 //this._fire.collection("Orders").add(oder);


    this.remove();


  }

}
