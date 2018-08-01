import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';
import {dataService} from './dataService.service';

@Component({
  selector: 'app-root',
  templateUrl :'./app.component.html',
  styleUrls: ['./style.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  objArray:any;
  selectedCountry:any;
  activeComponent:Number;
  constructor(private adService: AdService,private dataService: dataService) {}
  customerSelected:string;
  filterType:Object;

  searchValue = ""
  onSearchKey(value: string) {
    this.searchValue = value;
  }
  ngOnInit() {
    // this.dataService.bankId()

    this.objArray =[
      {
        id:'11',
        name:'already Selected',
        selected:true
      },
      {
        id:'12',
        name:'sagar',
        selected:false
      },
      {
        id:'13',
        name:'abhi',
        selected:false
      },
      {
        id:'14',
        name:'ayushi',
        selected:false
      },
    ]
    this.ads = this.adService.getAds();
    this.activeComponent = 0;
    this.customerSelected = "";

  }
  loadComponent(componentNumber:Number){
    this.activeComponent = componentNumber;
  }
  display(show) {
    this.customerSelected = "";
  }
}

