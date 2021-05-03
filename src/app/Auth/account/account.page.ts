import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Profile } from 'src/app/profile';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  profile ={} as Profile;

  Ref:any;
display:any;
imgURL;

  constructor(public _data: UserService,public _route : Router) { }


  ngOnInit() {
    this._data.getuuser().subscribe(you=>{
      this._data._fire.collection("users").doc(you.uid).valueChanges().subscribe(youu=>{
   this.display=youu;
      })

       }

       )
  }
  update(UserData : NgForm){
    this._data.getuuser().subscribe(lo=>{
      this._data._fire.collection("users").doc(lo.uid).update(UserData.value).then(u=>{
        console.log("success");
        this._route.navigate(['home']);
      }).catch(error=>{
        console.log("message,error");
      })
    })



   }

}
