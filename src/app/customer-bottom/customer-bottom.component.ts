import { Component, OnInit } from '@angular/core';
import { dataService } from '../dataService.service';
import { Customer } from '../customer';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-customer-bottom',
  templateUrl: './customer-bottom.component.html',
  styleUrls: ['./customer-bottom.component.css']
})
export class CustomerBottomComponent implements OnInit {
  currentCustomer:Customer;
  subscription:Subscription;
  customer: any;
  customers: any;
  constructor(
    private dataService: dataService
  ) {
    this.subscription = this.dataService.currentCustomer.subscribe((value:Customer) => {
      this.currentCustomer = value;
      debugger
    });
  }

  ngOnInit() {
    debugger;
    // this.customer = this.dataService.currentCustomer;
  }
}
