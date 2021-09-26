import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  id:number;
  user: User;
  searchText;
  users: User[];
  totalRec : number;
  page: number = 1;
  constructor(private userService: UserServiceService,private route: ActivatedRoute,private router: Router,) {
  }
  
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
