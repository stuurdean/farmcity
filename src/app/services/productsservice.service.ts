import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {

  constructor(private cloud : AngularFirestore) { }


  //funtion to get all products

  getProducts()
  {
    return this.cloud.collection('products')
  }

}
