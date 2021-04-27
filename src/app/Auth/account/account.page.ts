import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Profile } from 'src/app/profile';
import { Camera} from '@ionic-native/camera/ngx';

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

  constructor(private camera:Camera,public _data: UserService,public _route : Router) { }
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
