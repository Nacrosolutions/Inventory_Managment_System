import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-time-purchase',
  templateUrl: './time-purchase.component.html',
  styleUrls: ['./time-purchase.component.css']
})
export class TimePurchaseComponent implements OnInit {
  id:number;
  product: Product;
 
  products: Product[];

  searchText;
  
  totalRec : number;
  page: number = 1;
  
  constructor(private productService: ProductServiceService,private route: ActivatedRoute,private router: Router,) {
  }
  

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

}
