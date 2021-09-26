
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../common/product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../common/user';
import { data } from 'jquery';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { MdbTablePaginationComponent, MdbTableDirective } from 'PATH-TO-MDB-ANGULAR-HERE';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  searchText;
  id:number;
  product: Product;
  des:string='nabham';

  products: Product[];
  d:number=0;
  serverStatus=false;
  totalRec : number;
  page: number = 1;

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Product>(this.products);
  // p: number = 1;

  constructor(private productService: ProductServiceService,private route: ActivatedRoute,private router: Router,) {
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  
  

  ngOnInit() {  
// this.user=new User();
// this.id=this.route.snapshot.params['id'];

// this.userService


    this.productService.findAll().subscribe(data => {
      this.products = data;
    });

    
  }

  

}
