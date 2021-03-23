import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../profile';
import { UserService } from '../user.service';
import { Camera } from '@ionic-native/camera/ngx';
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
  constructor(public _data: UserService,public _route : ActivatedRoute,private camera:Camera) { }

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
getcamera(){
  this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.FILE_URI,}).then(res=>{
    
this.imgURL=res;
  }).catch(error=>{
    console.log(error);
  })
}
getGallary(){
  this.camera.getPicture({sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL}).then(res=>{
    
this.imgURL='data:image/jpeg;base64,'+res;
  }).catch(error=>{
    console.log(error);
  })
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