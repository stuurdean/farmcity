 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
<<<<<<< Updated upstream
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireAuthModule} from '@angular/fire/auth';
//import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,MatFormFieldModule,
<<<<<<< Updated upstream
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
=======
    FormsModule,
    ReactiveFormsModule,AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebaseConfig,)],
>>>>>>> Stashed changes
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
