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
  constructor() {}

  logging(form:NgForm)
  {
      console.log(form.value)
  }

}
