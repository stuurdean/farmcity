import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map,take } from 'rxjs/operators';
import { Url } from 'url';
import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
user:any
user$:any;
constructor(private routes:Router,public _data: UserService,public afAuth: AngularFireAuth,public navCtrl: NavController){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
      return new Promise((resolve, reject) => {



        this.afAuth.user.subscribe((user) => {
          if (user) {
            resolve(true);
          } else {
            this.navCtrl.navigateRoot(['']);
            resolve(false);
          }
        })

      })  
 
  
}
}
