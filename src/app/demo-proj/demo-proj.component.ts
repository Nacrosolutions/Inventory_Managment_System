import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";

import {Router, ActivatedRoute} from "@angular/router";

import { Product } from '../common/product';
import { ProductServiceService } from '../product-service.service';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-demo-proj',
  templateUrl: './demo-proj.component.html',
  styleUrls: ['./demo-proj.component.css'],
  providers: [NgbInputDatepickerConfig] 
 
})
export class DemoProjComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  product:Product;
  value:any;
  model: NgbDateStruct;


  @Input() value1:any;
  value2:any;
value3:any;
 

  products: Product[];
  
  serverStatus=false;
  totalquantity=90;
    // Min moment: February 12 2018, 10:30
    public minDate = new Date(2020, 1, 12, 10, 30);

    // Max moment: April 21 2018, 20:30
    public maxDate = new Date(2020, 3, 21, 20, 30);

 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService,
    config: NgbInputDatepickerConfig, calendar: NgbCalendar) {
    this.product = new Product()
   

   

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;

    // setting datepicker popup to close only on click outside
    config.autoClose = 'outside';

    // setting datepicker popup to open above the input
    config.placement = ['top-left', 'top-right'];
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }
  onSubmit() {

    this.productService.save(this.product).subscribe(result => this.gotoUserList());
 


  }

  gotoUserList() {

    this.router.navigate(['/product-list']);
  
  }
  
  calculate()
  {

  
  }
  forms(Userform:NgForm){
    return Userform.reset();
  }
  

// values(value,value1){
//   this.value2=value*value1;
//   return this.value2;
// }
}
