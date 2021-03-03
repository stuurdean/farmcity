import { ProductsService } from './../services/products.service';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
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
  constructor( private firestoreservice :ProductsService) {}


  ngOnInit() {

    this.firestoreservice.getProducts().snapshotChanges().subscribe(result=>{

      console.log(result);
      this.products=result;
    });

    //getting fruits from firebase

    this.firestoreservice.getFruits().snapshotChanges().subscribe(result=>{

      console.log(result)

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

}
