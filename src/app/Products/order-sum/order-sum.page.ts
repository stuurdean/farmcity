import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-sum',
  templateUrl: './order-sum.page.html',
  styleUrls: ['./order-sum.page.scss'],
})
export class OrderSumPage implements OnInit {

  total :any;
  delivery : any;
  subtot : any;
  user : any;
  constructor(private _service :UserService) { }

  ngOnInit() {


    this._service.user().subscribe(red=>{
      this.user = red

    })
    this.total= parseFloat( localStorage.getItem("total"));

    if(this.total>299)
    {
      this.delivery=0
      this.subtot=this.total+this.delivery;
    }
    else{

      this.delivery= 60
      this.subtot=this.total+this.delivery;
    }


  }



}
