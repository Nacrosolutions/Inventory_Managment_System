import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  id:number;
  user: User;
  editForm: FormGroup;
  submitted:true;
  
  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserServiceService) { }

ngOnInit() {
this.user = new User();

this.id = this.route.snapshot.params.id;

this.userService.getEmployee(this.id)
.subscribe(data => {
console.log(data);
this.user = data;
}, error => console.log(error));
}

updateEmployee() {
this.userService.updateEmployee(this.id, this.user)
.subscribe(data => console.log(data), error => console.log(error));
this.user = new User();
this.gotoList();
}

onSubmit() {
this.updateEmployee();
}

gotoList() {
this.router.navigate(['/employees']);
}
}