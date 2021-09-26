import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  isAuthenticated=false;
  private userSub:Subscription;
  constructor(private authService:AuthService) { }
  ngOnInit(){
    this.userSub= this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user;

    });
   }
   onlogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
