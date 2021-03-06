import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import{AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ToastController, NavController } from '@ionic/angular';
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

  constructor(public fireAuth: AngularFireAuth, public _fire:AngularFirestore,private Toast:ToastController,public afDatabase:AngularFireDatabase,public navCtrl:NavController,public _route : Router,private router:Router) { }
  profile ={} as Profile;

    private person :Profile
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

          ).then(res=>res.present());




      }).catch(async err=>{
        console.log('Error',err.message)
        console.log('Error',err.code)


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
   })
     }
     recovery(email){
      this.fireAuth.sendPasswordResetEmail(this.email).then(data=>{

        console.log(data);





      }).catch(errr=>{
        console.log(errr)
      })
    }

    login(email,password){

      this.fireAuth.signInWithEmailAndPassword(email,password).then(info=>{

     console.log('succefully login', info.user.uid)


        this.getUser(info.user.uid)

      }).catch(err=>{
        console.log('smothing went wrong',err.message)
      })
    }


    getUser(uid)
    {
        return this._fire.collection('users').doc(uid).valueChanges().subscribe(res=>{

          this.details = res;
          this.person={
            uid:this.details.uid,
    name:this.details.name,
    surname:this.details.surname,
    phone:this.details.phone,
    address:this.details.address
          }

          console.log(this.person)
        })

    }


}
