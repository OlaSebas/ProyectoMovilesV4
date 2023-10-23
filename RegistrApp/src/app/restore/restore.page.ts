import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {
  user:string ="";
  isAlertOpen = false;
  
  constructor(private route:Router, private authServi: AuthenticationService) { }

  public alertButtons = ['OK'];
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  async restaurarContra(){
    if(this.user.length === 0){
      this.setOpen(true)
    }
    else{
      this.authServi.userExist(this.user).then(()=>{
        this.authServi.restorePass(this.user)
        this.route.navigate([''])
      }).catch((error)=>{
        this.setOpen(true)
      })
    }

  }
  ngOnInit() {
  }

}
