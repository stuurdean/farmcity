import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore : AngularFirestore) { }



//get all products

getProducts()
{
  return this.firestore.collection('products')
}


// get product on Promotions

  getPromotion()
  {


    return this.firestore.collection('products',ref=> ref.where('promotion','==','Yes'))

  }
  //get fruits

  getFruits()
  {
    return this.firestore.collection('products',ref=> ref.where('productCategory','==','Fruits').limit(5))
  }


  //get vetetables

  getVetables()
  {
    return this.firestore.collection('products',ref=> ref.where('productCategory','==','Vegetables').limit(5))
  }

  //get by category
  getbyCategory(category)
  {
    return this.firestore.collection('products',ref=> ref.where('productCategory','==',category))
  }

  // get each product
  getSelectedProduct(ref)
  {
    return this.firestore.collection ('products').doc (ref).valueChanges()
  }

  getCategory()
  {
    return this.firestore.collection('categories').valueChanges()
  }

}
