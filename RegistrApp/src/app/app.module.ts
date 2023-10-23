import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire/compat';

import {provideFirebaseApp, initializeApp} from '@angular/fire/app'
import {getFirestore, provideFirestore} from '@angular/fire/firestore'
import { getAuth , provideAuth}  from "@angular/fire/auth"
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule, AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})

export class AppModule {}
