import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent implements OnInit {
  searchText;
  id:number;
  user: User;
 
  users: User[];
  totalRec : number;
  page: number = 1;

  constructor(private userService: UserServiceService,private route: ActivatedRoute,private router: Router,) {
  }
  

  ngOnInit() {  
// this.user=new User();
// this.id=this.route.snapshot.params['id'];

// this.userService

    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  delete(user: User): void {
    this.userService.delete(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  // update(){
  //   this.userService.getUser(this.user.id ).subscribe
  // }
  

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }


}
