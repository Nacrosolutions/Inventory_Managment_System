import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html',
  styleUrls: ['./inv.component.css']
})

export class InvComponent implements OnInit {
  // user:string[]=[];

  // users:any= {

  // }

  

// onshow(){
//   this.formTodoComponent.user.inventoryname;
//   this.formTodoComponent.user.inventorytype;ng 
// }

// onShow(){
  
//  this.user.push(this.formTodoComponent.user.inventoryname);
//  this.user.push(this.formTodoComponent.user.inventorytype);

// }
// onDetail(){
//   for(let i=0;i<=this.user.length;i++){
//     this.users.prop(i);
//   }


@Input() inventoryname:string;
@Input() inventorytype:string;
@Input() user:any;


constructor(private route:Router){
  
}
  ngOnInit(): void {
  }

}
