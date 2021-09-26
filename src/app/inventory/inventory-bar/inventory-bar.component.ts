import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { User } from 'src/app/common/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
let jQuery: any;
@Component({
  selector: 'app-inventory-bar',
  templateUrl: './inventory-bar.component.html',
  styleUrls: ['./inventory-bar.component.css']
})
export class InventoryBarComponent implements OnInit {

  user:User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {
    this.user = new User();
  }

  ngOnInit() {
  $(document).ready(function(){
    $(".push_menu").click(function(){
         $(".wrapper").toggleClass("active");
    });
});
  }
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/emp']);
  
  }}


