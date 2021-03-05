import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  constructor(public toastController :ToastController) { }


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
    return this.cart
  }
  getCartCount(){

   return this.cartItemCount
  }


  addTocart(product)
  {
    let added= false;
    for(let p of this.cart){

      if(p.id===product.id)
      {
        p.productQty +=1;
        added=true;
        break;
      }
    }
    if(!added)
    {
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value+1);
    }



    this.presentToast();

  }

  addProductQty()
  {

  }
  removeqty(product)
  {
      for (let [index,p] of this.cart.entries())
      {
        if (p.id===product.id)
        {
          p.productQty-=1;


          if (p.productQty==0)
          {
            this.cart.splice(index,1)
          }

        }
      }
  }

  removeFromCart(product)
  {
      for (let [index,p] of this.cart.entries())
      {
        if (p.id===product.id)
        {

            this.cart.splice(index,1);
            this.cartItemCount.next(this.cartItemCount.value-1)

        }
      }
  }

}
