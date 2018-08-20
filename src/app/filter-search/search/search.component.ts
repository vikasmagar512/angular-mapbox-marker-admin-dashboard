import { Component, OnInit } from '@angular/core';
import {dataService} from '../../dataService.service';
import {AdService} from '../../ad.service';
import { FormControl } from '@angular/forms';
import { Asset } from '../../asset';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  queryField: FormControl = new FormControl();
  locationSearchBox = '';
  Asset:Array<Asset>;
  newAsset:Array<Asset>=[];
  movies:Array<any>=[];
  searchValue:string;
  newMovies:Array<any>=[];
  filters=['customerName','location','assetType','assetName']
  constructor(private filterService :AdService,

  private data:dataService) {
    // this.locationSearch = filterService.locationSearch; 
  }
  ngOnInit() {
    this.movies=this.filterService.getMovies();
    this.Asset=this.data.getAssets();
  }
  onKey(value: string) {
    this.locationSearchBox = value.toLowerCase();
    this.filterService.changeLocation(this.locationSearchBox) 
    // this.filterService.locationS = this.locationSearchBox;
    console.log(this.locationSearchBox);
    this.newMovies = this.movies.filter(movies => movies.name.toLowerCase().indexOf(this.locationSearchBox) > -1);
    console.log(this.newMovies);
    this.newAsset=this.Asset.filter(asset => asset.category.toLowerCase().indexOf(this.locationSearchBox) > -1);
    console.log("Asset",this.newAsset);
  }
}
