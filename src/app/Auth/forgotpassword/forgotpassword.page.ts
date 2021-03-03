import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Profile } from 'src/app/profile';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email:string;
  profile ={} as Profile;
  constructor(
    private afauth:AngularFireAuth,
private toastr:ToastController,
private router:Router,
private loadingCtrl:LoadingController,
  ) { }

  ngOnInit() {
  }
  async resetPassword(){

    if(this.email){
      
   const loading= await this.loadingCtrl.create({
message: 'please wait..',
spinner: 'crescent',
showBackdrop:true
   });

   loading.present();

   this.afauth.sendPasswordResetEmail(this.email).then(()=>{
    loading.dismiss();
    this.toast('check your email address','success')
    this.router.navigate(['/signin']);

    } )
  .catch((error)=>{
    loading.dismiss();
this.toast(error.message,'danger');


  })



  



    }
    else{
this.toast('plesase enter your email address','danger');

    }

  }

  // end of restpasword
async toast(message,status){
const toast=await this.toastr.create({

message:message,
position:'top',
color:status,
duration:2000
});

toast.present();



}






}
