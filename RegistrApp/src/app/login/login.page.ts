import { Component, OnInit } from '@angular/core';
import { LoginCrendentials } from '../app.model';
import { Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../auth-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = "";
  pwd: string = "";
  isAlertOpen = false;


  credentials: LoginCrendentials[] = [
    { id: 1, username: "juan", password: "1234" },
    { id: 2, username: "Leandro Palma", password: "1234" },
    { id: 3, username: "Kathy Valdivia", password: "1234" },
    { id: 4, username: "Elias", password: "1234" }
  ]

  public alertButtons = ['OK'];
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  constructor(
    private route: Router,
    private aControl: AnimationController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private loadingCtr: LoadingController,
    private authServi: AuthenticationService) { }



  ngOnInit() {
    const animation: Animation = this.aControl.create()
      .addElement(document.querySelector('ion-card-title')!)
      .duration(1200)
      .iterations(10)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.1)' },
        { offset: 1, transform: 'scale(1)' }
      ]);
    animation.play();



  }
  async login() {
    const loading = await this.loadingCtr.create();
    await loading.present();
    const usuario = await this.authServi.loginUser(this.user, this.pwd)
      .catch((error) => {
        loading.dismiss();
      })
    if (usuario) {
      console.log('chao')
      loading.dismiss()
      this.route.navigate(['/home', this.user])
    }
    else {
      loading.dismiss()
      console.log('else');
    }
  }


}




