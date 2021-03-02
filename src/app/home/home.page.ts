import { ProductsserviceService } from './../services/productsservice.service';
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
  constructor( private firestoreservice : ProductsserviceService) {}


  ngOnInit() {

    this.firestoreservice.getProducts().snapshotChanges().subscribe(result=>{

      console.log(result)
    })
  }

}
