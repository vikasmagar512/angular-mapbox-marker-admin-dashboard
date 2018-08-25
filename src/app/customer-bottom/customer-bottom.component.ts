import { Component, OnInit } from '@angular/core';
import { dataService } from '../dataService.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-bottom',
  templateUrl: './customer-bottom.component.html',
  styleUrls: ['./customer-bottom.component.css']
})
export class CustomerBottomComponent implements OnInit {

  customer: any;
  customers: any;
  constructor(
    private dataService: dataService
  ) { }

  ngOnInit() {
    this.dataService.currentCustomer = "123"
    this.customers = this.dataService.getCustomers();
    this.customer = this.customers.find((item) => item.id == this.dataService.currentCustomer)
  }
}
