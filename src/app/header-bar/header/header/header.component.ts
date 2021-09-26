import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-headers',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderBarComponent implements OnInit {
  isAuthenticated=false;
  private userSub:Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit(){
    this.userSub= this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user;
    })
  }
  onlogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
