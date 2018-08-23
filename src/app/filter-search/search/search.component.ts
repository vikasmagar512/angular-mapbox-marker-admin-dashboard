import { Component, OnInit,TemplateRef,ViewChild,ElementRef, Renderer} from '@angular/core';
import {dataService} from '../../dataService.service';
import {AdService} from '../../ad.service';
import { FormControl } from '@angular/forms';
import { Asset } from '../../asset';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('locationSearchBox') inp:ElementRef;
  queryField: FormControl = new FormControl();
  locationSearchBox = '';
  Asset:Array<Asset>;
  newAsset:Array<Asset>=[];
  movies:Array<any>=[];
  searchValue:string;
  newMovies:Array<any>=[];
  showFilters:boolean = false
  // filters=['Customer','Asset Type','Asset','Location']
  filters=['Customer','Asset Type']

  public modalRef: BsModalRef;
  constructor(private filterService :AdService,
     private modalService: BsModalService,
  private data:dataService,
  private renderer: Renderer) {
    // this.locationSearch = filterService.locationSearch;
  }
  ngOnInit() {
    this.movies=this.filterService.getMovies();
    this.Asset=this.data.getAssets();
  }

  setFocus(template:TemplateRef<any>) {
    alert("onFocus")
    // debugger
    this.showFilters = true
    // this.renderer.invokeElementMethod(template, 'focus');
  }
  removeFilters() {
    // alert("onFocus")
    // debugger

    this.showFilters = false
    // this.renderer.invokeElementMethod(template, 'focus');
  }

  onKey(value: string) {
    this.locationSearchBox = value.toLowerCase();
    // alert('value')
    this.filterService.changeLocation(this.locationSearchBox)

    // this.filterService.locationS = this.locationSearchBox;
    console.log(this.locationSearchBox);
    this.newMovies = this.movies.filter(movies => movies.name.toLowerCase().indexOf(this.locationSearchBox) > -1);
    console.log(this.newMovies);
    this.newAsset=this.Asset.filter(asset => asset.category.toLowerCase().indexOf(this.locationSearchBox) > -1);
    console.log("Asset",this.newAsset);
  }
}
