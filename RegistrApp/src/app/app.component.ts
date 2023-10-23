import { Component } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpN5pPPgWQJLbg3uK--L-_5IsAceQRVfk",
  authDomain: "protocolsys-6ec8d.firebaseapp.com",
  projectId: "protocolsys-6ec8d",
  storageBucket: "protocolsys-6ec8d.appspot.com",
  messagingSenderId: "887014881387",
  appId: "1:887014881387:web:e9eadcffaebfb70cbb592e",
  measurementId: "G-7VN5F7J33N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  }


}
