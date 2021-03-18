import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../profile';
import { UserService } from '../user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  profile ={} as Profile;
  Ref:any;
   display:any;
  constructor(public _data: UserService,public _route : ActivatedRoute) { }

  ngOnInit() {
 this._data.getuuser().subscribe(rez=>{
   console.log(rez.uid);
this._data._fire.collection("users").doc(rez.uid).valueChanges().subscribe(are=>{
this.display=are;

console.log(this.display)
})


 }

 )   

}

update(UserData : NgForm){
 this._data.getuuser().subscribe(save=>{
   this._data._fire.collection("users").doc(save.uid).update(UserData.value).then( res => {
    console.log('success')
   }).catch(err => {
     console.log(err.message)
   });
 })
 

 }

}