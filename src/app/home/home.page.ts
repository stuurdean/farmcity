import { Profile } from 'src/app/profile';
import { CartService } from './../services/cart.service';
import { ProductsService } from './../services/products.service';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< Updated upstream
import { BehaviorSubject } from 'rxjs';
=======
import {first} from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase";
import { snapshotChanges } from '@angular/fire/database';
>>>>>>> Stashed changes


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
sampleArr=[];
resultArr=[];
 public foodlist:any;
 searchedUsers=[];
  slideOpts = {
    initialSlide: 0,
    spaceBetween: 0,
     slidesPerView:2,
    speed: 400
  };
  products : any;
  fruits : any;
  promotion : any;
  promotionNo :any;
  vegetables : any;
<<<<<<< Updated upstream
  cartCount : BehaviorSubject<number>;
  constructor( private firestoreservice :ProductsService,private cartservice : CartService) {}
=======
  constructor( private firestoreservice :ProductsService,private firestore:AngularFirestore) {}
>>>>>>> Stashed changes


  private profile :Profile;
  ngOnInit() {

<<<<<<< Updated upstream

    console.log(this.profile)
    this.firestoreservice.getProducts().snapshotChanges().subscribe(result=>{
=======
   

   this.firestoreservice.getProducts().snapshotChanges().subscribe(result=>{
>>>>>>> Stashed changes


      this.products=result;

    });

    //Getting Cart Count

    this.cartCount =this.cartservice.getCartCount();

    //getting fruits from firebase

<<<<<<< Updated upstream

    this.firestoreservice.getFruits().snapshotChanges().subscribe(result=>{
=======
     this.firestoreservice.getFruits().snapshotChanges().subscribe(result=>{
>>>>>>> Stashed changes




      this.fruits=result;

    });

      //geting vegetables

      this.firestoreservice.getVetables().snapshotChanges().subscribe(result=>{

        this.vegetables = result;
      })

      //getpromotionsProducts

      this.firestoreservice.getPromotion().snapshotChanges().subscribe(result=>{

        this.promotion = result;

        this.promotionNo= result.length
      })




  }

  

  view()
  {
    console.log("Clicked")
  }


 // async filterList(evt){

    //this.firestoreservice.getProducts().snapshotChanges().subscribe(result=>{

     // console.log(result);
     // this.foodlist= this.products=result;
   // });
   // const searchTeam=evt.srcElement.value;
   // if(!searchTeam){
   // return;

   // }
   // this.foodlist=this.foodlist.filter(currentfood=>{
 // if(currentfood.name&& searchTeam){
    
  //  return(currentfood.name.toLowercase().indexOf(searchTeam.toLowercase())>-1 || currentfood)



 // }


  //  }

  //  )

 // }

 search(event){
let searchKey: string =event.target.value;
let firstLetter= searchKey.toUpperCase();
if(searchKey.length==0){
this.sampleArr=[];
this.resultArr=[];
}

if(this.sampleArr.length==0)
{
this.firestore.collection('products',ref=>ref.where('Search','==',firstLetter)).snapshotChanges()
.subscribe(data=>{
data.forEach(childData=>{

  this.sampleArr.push(childData.payload.doc.data())
}


)



}



)

}
else{

this.resultArr=[];
this.sampleArr.forEach(val=>{

let name:string=val['productName'];
if(name.toUpperCase().startsWith(searchKey.toUpperCase()))
{if(true){
this.resultArr.push(val);
}

}

}



)

}


 }





}
