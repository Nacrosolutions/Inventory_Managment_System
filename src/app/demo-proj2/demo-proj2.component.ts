import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-proj2',
  templateUrl: './demo-proj2.component.html',
  styleUrls: ['./demo-proj2.component.css']
})
export class DemoProj2Component implements OnInit {
  product:Product;
  value:any;
  value1:any;

  id:number;
 
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductServiceService) { }

    ngOnInit() {
      this.product = new Product();
      
      this.id = this.route.snapshot.params.id;
      
      this.productService.getEmployee(this.id)
      .subscribe(data => {
      console.log(data);
      this.product = data;
      }, error => console.log(error));
      }
  
  updateEmployee() {
    this.productService.updateEmployee(this.id, this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
    }
    
  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/product-list']);
    }
// values(value,value1){
//   this.value2=value*value1;
//   return this.value2;
// }
}
