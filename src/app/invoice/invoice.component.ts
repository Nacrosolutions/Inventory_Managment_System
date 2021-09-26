import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  id:number;
  product: Product;
 
  products: Product[];

  constructor(private productService: ProductServiceService,private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(){
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });

  }
}
