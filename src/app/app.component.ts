import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';

@Component({
  selector: 'app-root',
  templateUrl :'./app.component.html',
  styleUrls: ['./style.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  activeComponent:Number;
  constructor(private adService: AdService) {}
  customerSelected:string;
  filterType:Object;
  searchValue = ""
  onSearchKey(value: string) {
    this.searchValue = value;
  }
  ngOnInit() {
    this.ads = this.adService.getAds();
    this.activeComponent = 1;
    this.customerSelected = "";
  }
  loadComponent(componentNumber:Number){
    this.activeComponent = componentNumber;
  }
  display(show) {
    this.customerSelected = "";
  }
}

