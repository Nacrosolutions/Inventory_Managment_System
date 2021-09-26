import { Component, OnInit } from '@angular/core';
import {User} from '../common/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  form=new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(4)
 
      
    ]),
    email:new FormControl('',[Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ])
  })
  get name(){
    return this.form.get('name')
  }
  get email(){
    return this.form.get('email')
  }

  user:User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }}

