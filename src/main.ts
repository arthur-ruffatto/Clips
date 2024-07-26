/*import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { AppModule } from './app/app.module';
import {environment} from "./environments/environment.development";

firebase.initializeApp(environment.firebase)

let appInit = false

firebase.auth().onAuthStateChanged(user => {
  if(!appInit){
    platformBrowserDynamic().bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true
    })
      .catch(err => console.error(err));
  }
})*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));



