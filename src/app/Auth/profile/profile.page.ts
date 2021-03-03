import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Profile } from 'src/app/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile ={} as Profile;
  Ref:any;
  constructor(public _data: UserService,private afs: AngularFirestore,public fireAuth: AngularFireAuth,public _route : ActivatedRoute) { }

  ngOnInit() {
  }
  update(UserData : NgForm){
    this.Ref =this._route.snapshot.paramMap.get('ref');
    this._data.createprofile(this.Ref,UserData.value)
  
   }




}
