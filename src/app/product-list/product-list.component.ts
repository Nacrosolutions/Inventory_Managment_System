import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../common/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id:number;
  product: Product;
 
  products: Product[];

  constructor(private productService: ProductServiceService,private route: ActivatedRoute,private router: Router,) {
  }
  

  ngOnInit() {  
// this.user=new User();
// this.id=this.route.snapshot.params['id'];

// this.userService

    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }
  delete(product: Product): void {
    this.productService.delete(product)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };
  // update(){
  //   this.userService.getUser(this.user.id ).subscribe
  // }
  

  updateEmployee(id: number) {
    this.router.navigate(['up', id]);
  }

}
