import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})


export class CategoryPage implements OnInit {
category :any;
  constructor(private firestore :ProductsService) { }

  ngOnInit() {


    this.firestore.getCategory().subscribe(result=>{

      this.category=result;
    })
  }

}
