import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import{AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
//import { Profile } from './model/profile';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Profile } from './profile';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public fireAuth: AngularFireAuth, public _fire:AngularFirestore,private Toast:ToastController,public afDatabase:AngularFireDatabase,public navCtrl:NavController,public _route : Router,private router:Router,private toastr:ToastController,private loadingCtrl:LoadingController) { }
  profile ={} as Profile;

    public person :Profile
 details:any;
 email:any;



  async  Register(email,password){

    await this.fireAuth.createUserWithEmailAndPassword(email,password).then( async cred=>{

     this._route.navigate(['profile',cred.user?.uid])
  //this.navCtrl.navigateRoot(['profile',cred.user?.uid])
        //----for email verification

        const uid=cred.user.uid;


        return this._fire.doc(`users/${uid}`).set({
          uid:cred.user.uid,
          email:cred.user.email,
          name:'',
          address:'',
          surname:'',
          phone:'',
        })


       cred.user.sendEmailVerification();
       this.toast('succeful registerd','success')
        console.log('succeful registerd user',cred)

          await this.Toast.create({

            message:"nmmn",
            duration:2000,
            position:"middle",
            buttons:[{
              text:'ok',
              handler: ()=>{
                console.log("ok clicked");
              }
            }]

          }

          ).then(res=>{
            this.toast('Account created','success')
          });




      }).catch(async err=>{
        console.log('Error',err.message)
        console.log('Error',err.code)
        this.toast(err.message,'danger')

        await this.Toast.create({

          message:err.message,
          duration:2000,
          position:"middle",
          buttons:[{
            text:'ok',
            handler: ()=>{
              console.log("ok clicked");
            }
          }]

        }

        ).then(res=>res.present()


        );




      })


    }

    createprofile(ref:any,data:any){
      // this.fireAuth.authState.take(1).subscribe(auth=>{
    //this.afDatabase.list(`profile/${auth.uid}`).push(this.profile).then(()=>this.navCtrl.navigateRoot('home'))
      // })
   //this._data.update();
   this._fire.collection("users").doc(ref).update(data)


  .then(async res=>{


    this._route.navigate(['home']);
    this.toast('details saved','success')
     this.Toast.create({

      message:"details saved",
      duration:2000,
      position:"middle",
      buttons:[{
        text:'ok',
        handler: ()=>{
          console.log("ok clicked");
        }
      }]

    })


   }).catch(res=>{
     console.log("error",res)
     this.toast(res.message,'danger')
   })
     }
     recovery(email){
      this.fireAuth.sendPasswordResetEmail(this.email).then(data=>{

        console.log(data);





      }).catch(errr=>{
        console.log(errr)
      })
    }

   async login(email,password){

    const loading= await  this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      spinner: 'dots',
      showBackdrop:true
         });


         loading.present();

      this.fireAuth.signInWithEmailAndPassword(email,password).then(info=>{

     console.log('succefully login', info.user.uid)
     this.toast('succefully login','success')





     localStorage.setItem("userid",info.user.uid)

     loading.dismiss();

        this.getUser(info.user.uid)

      }).catch(err=>{
        console.log('smothing went wrong',err.message);
        this.toast(err.message,'danger')
      })
    }


    getUser(uid)
    {
        return this._fire.collection('users').doc(uid).valueChanges().subscribe(res=>{


        const data =res as Profile;


          this.router.navigate(['/home'])
          console.log(data)
        })

    }

    getuuser(){
     return this.fireAuth.authState;


    }

    user()
    {

      return this._fire.collection("users").doc(localStorage.getItem("userid")).valueChanges()
    }

    logout(){
      return this.fireAuth.signOut().then(rea=>{
        this.toast('succefully logout','success')
      }).catch(err=>{
        this.toast(err.message,'danger')
      });
    }
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
