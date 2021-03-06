import { Profile } from 'src/app/profile';
import { CartService } from './../services/cart.service';
import { ProductsService } from './../services/products.service';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


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
  cartCount : BehaviorSubject<number>;
  constructor( private firestoreservice :ProductsService,private cartservice : CartService) {}


  private profile :Profile;
  ngOnInit() {


    console.log(this.profile.name)
    this.firestoreservice.getProducts().snapshotChanges().subscribe(result=>{


      this.products=result;

    });

    //Getting Cart Count

    this.cartCount =this.cartservice.getCartCount();

    //getting fruits from firebase


    this.firestoreservice.getFruits().snapshotChanges().subscribe(result=>{




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
