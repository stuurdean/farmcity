import { DatabaseService } from './../services/database.service';
import { Profile } from 'src/app/profile';
import { CartService } from './../services/cart.service';
import { ProductsService } from './../services/products.service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  public foodList: any[];
  public foodListBackup: any[];
  public goalList:any[];
public loadedGoalList: any[];
public  display:any;

sampleArr=[];
resultArr=[];

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
  user :any;
  cartCount : BehaviorSubject<number>;

  constructor( private firestoreservice :ProductsService,private cartservice : CartService,private firestore: AngularFirestore,private userService:UserService, private _route:Router) {}





  //profile ={} as Profile;

  public profile :Profile;
   async ngOnInit() {
   // this.foodList = await this.initializeItems();


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


async initializeItems(): Promise<any> {
  const foodList = await this.firestore.collection('products')
    .valueChanges().pipe(first()).toPromise();
  this.foodListBackup = foodList;
  return foodList;
}
async filterList(event) {
  this.foodList = await this.initializeItems();
  const searchTerm = event.srcElement.value;
  this._route.navigate(['searchpage']);

  if (!searchTerm) {

    
    return;

  }

  this.foodList = this.foodList.filter(currentFood => {
    if (currentFood.productName && searchTerm) {
      return (currentFood.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
    }
  });
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

 //search(event){
//let searchKey: string =event.target.value;
//let firstLetter= searchKey.toUpperCase();
//if(searchKey.length==0){
//this.sampleArr=[];
//this.resultArr=[];
//}

//if(this.sampleArr.length==0)
//{
//this.firestore.collection('products',ref=>ref.where('Search','==',firstLetter)).snapshotChanges()
//.subscribe(data=>{
//data.forEach(childData=>{

  //this.sampleArr.push(childData.payload.doc.data())
//}


//)



//}



//)

//}
//else{

//this.resultArr=[];
//this.sampleArr.forEach(val=>{

//let name:string=val['productName'];
//if(name.toUpperCase().startsWith(searchKey.toUpperCase()))
//{if(true){
//this.resultArr.push(val);
//}

//}

//}



//)

//}


 //}

 search(q) { 
  console.log(q); 
  this._route.navigate(['searchpage',q]);
}



}
