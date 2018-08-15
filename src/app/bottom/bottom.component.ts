import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {dataService} from '../dataService.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  customer:any;
  constructor(private dataService:dataService)
  { }

  ngOnInit() {
    this.customer =this.dataService.getCustomer();
  }

}
