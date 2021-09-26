import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  user = {
     inventoryname: '', 
    inventorytype: ''
   
  };
  submitted = false;

  ngOnInit(): void {
  }

  constructor(private router:Router){}


 
  onSubmit() {
   this.submitted=true;
    this.user.inventoryname = this.signupForm.value.inventoryname;
    this.user.inventorytype = this.signupForm.value.inventorytype;


    this.signupForm.reset();
  }
 

}
