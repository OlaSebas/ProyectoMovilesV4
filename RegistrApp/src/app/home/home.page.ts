import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any;
  

  constructor(private route:ActivatedRoute, private authServ : AuthenticationService, private router:Router) {
    this.route.paramMap.subscribe((params) => {
      this.user = params.get('dato');
    });
  }
  logOut(){
    this.authServ.logOut().then(()=>{
      this.router.navigate([''])
    })
    
  }
  
}
