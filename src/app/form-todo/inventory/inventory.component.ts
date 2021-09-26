import { Component, OnInit, Input } from '@angular/core';
import { FormTodoComponent } from '../form-todo.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  // user:string[]=[];

  // users:any= {

  // }

  constructor(private formTodoComponent:FormTodoComponent) { }

// onshow(){
//   this.formTodoComponent.user.inventoryname;
//   this.formTodoComponent.user.inventorytype;
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

  ngOnInit(): void {
  }

}
