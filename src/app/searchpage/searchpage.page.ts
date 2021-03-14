import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {
  public foodList: any[];
  public foodListBackup: any[];

  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {
    this.foodList = await this.initializeItems();
  }


  async initializeItems(): Promise<any> {
    const foodList = await this.firestore.collection('products')
      .valueChanges().pipe(first()).toPromise();
    this.foodListBackup = foodList;
    return foodList;
  }

  async filterList(event) {
    this.foodList = await this.initializeItems();
    const searchTerm = event.srcElement.value;
    
  
    if (!searchTerm) {
  
      
      return;
  
    }
  
    this.foodList = this.foodList.filter(currentFood => {
      if (currentFood.productName && searchTerm) {
        return (currentFood.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
      }
    });
  }


}
