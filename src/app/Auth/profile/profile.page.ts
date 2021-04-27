import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Profile } from 'src/app/profile';
import { Camera} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile ={} as Profile;

  Ref:any;
  imgURL;
  constructor(private camera:Camera,public _data: UserService,private afs: AngularFirestore,public fireAuth: AngularFireAuth,public _route : ActivatedRoute) { }
  getCamera(){
    this.camera.getPicture(
      {sourceType:this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,}
    ).then((res)=>{
      
    this.imgURL=res;
    }).catch(e=>{
      console.log(e);
    })
    }
    
    getGallery(){
      this.camera.getPicture(
        {sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: this.camera.DestinationType.DATA_URL}
      ).then((res)=>{
        this.imgURL='data:image/jpeg;base64,' + res;
        }).catch(e=>{
          console.log(e);
        })
    }
  ngOnInit() {
  }
  update(UserData : NgForm){
    this.Ref =this._route.snapshot.paramMap.get('ref');
    this._data.createprofile(this.Ref,UserData.value)
  
   }




}
