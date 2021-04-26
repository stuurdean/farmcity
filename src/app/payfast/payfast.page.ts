import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payfast',
  templateUrl: './payfast.page.html',
  styleUrls: ['./payfast.page.scss'],
})
export class PayfastPage implements OnInit {
total : any;
  constructor() { }

  ngOnInit() {

    this.total=100.00
  }

}
