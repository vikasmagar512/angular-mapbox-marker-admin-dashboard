import { Component, OnInit } from '@angular/core';
import {dataService} from '../../dataService.service';
import {AdService} from '../../ad.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locationSearchBox = '';
  constructor(private filterService :AdService) {
    // this.locationSearch = filterService.locationSearch;
  }
  ngOnInit() {}
  onKey(value: string) {
    this.locationSearchBox= value.toLowerCase();
    this.filterService.changeLocation(this.locationSearchBox)
    // this.filterService.locationS = this.locationSearchBox;
  }
}
