import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  user = {
     inventoryname: '', 
    inventorytype: ''
   
  };
  submitted = false;

  ngOnInit(): void {
  }

  constructor(public router:Router){}


  submit(){
    this.router.navigate(['/muscles/add'])
  }
  
  onSubmit() {
   this.submitted=true;
    this.user.inventoryname = this.signupForm.value.inventoryname;
    this.user.inventorytype = this.signupForm.value.inventorytype;


    this.signupForm.reset();
  }
 

}

