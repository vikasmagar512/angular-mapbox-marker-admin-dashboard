import { Component, OnInit, TemplateRef, ViewChild, ElementRef, Renderer } from '@angular/core';
import { dataService } from '../../dataService.service';
import { AdService } from '../../ad.service';
import { FormControl } from '@angular/forms';
import { Asset } from '../../asset';
import { AutoCompleteItem, AutocompleteStyle } from 'ng2-simple-autocomplete';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Customer } from '../../customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterList: object;
  @ViewChild('locationSearchBox') inp: ElementRef;
  queryField: FormControl = new FormControl();
  locationSearchBox = '';
  customers: Array<Customer>;
  filteredCustomer: Array<Customer>;
  Asset: Array<Asset>;
  newAsset: Array<Asset> = [];
  movies: Array<any> = [];
  searchValue: string;
  newMovies: Array<any> = [];

  showFilters: boolean = false
  // filters=['Customer','Asset Type','Asset','Location']
  filters = [
    { name: 'Customer', value: true },
    { name: 'Asset Type', value: false },
    { name: 'Asset Name', value: false },
    { name: 'Location', value: false }
  ];
  public modalRef: BsModalRef;
  constructor(private filterService: AdService,
    private modalService: BsModalService,
    private data: dataService,
    private renderer: Renderer) {
    // this.locationSearch = filterService.locationSearch;
  }
  updateFilterState($event, filter) {
    // debugger
  }

  ngOnInit() {
    this.movies = this.filterService.getMovies();
    this.Asset = this.data.getAssets();
    this.customers = this.data.getCustomers();
  }

  onFilter() {
    // for(let i=0;i<this.filters.length;i++){
    //   if(this.filters[i].value===true){
    //     if(this.filters[i].name === "Customer"){
    //       filterList.push(this.)
    //     }
    //   }
    // }
    // alert("changed")

  }

  setFocus(template: TemplateRef<any>) {
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

  // onSelectItem(item: AutoCompleteItem) {
  //   // do something with selected item
  // }

  onChangeInput(search: string) {
    // fetch remote data from here
    // And reassign the 'remoteData' which is binded to 'searchResults' property.
  }

  onKey(value: string) {
    this.locationSearchBox = value.toLowerCase();
    // alert('value')
    this.filterService.changeLocation(this.locationSearchBox)

    // this.filterService.locationS = this.locationSearchBox;
    console.log(this.locationSearchBox);
    // debugger
    if (!value.trim()) {
      this.newMovies = [];
    }
    else {
      this.newMovies = this.movies.filter(movies => movies.name.toLowerCase().indexOf(this.locationSearchBox) > -1);
      console.log(this.newMovies);
    }

    if (!value.trim()) {
      this.filteredCustomer = [];
    }
    else {
      this.filteredCustomer = this.customers.filter(customer => customer.name.toLowerCase().indexOf(this.locationSearchBox) > -1);
      console.log(this.filteredCustomer);
    }

    if (!value.trim()) {
      this.newAsset = [];
    }
    else {
      this.newAsset = this.Asset.filter(asset => asset.category.toLowerCase().indexOf(this.locationSearchBox) > -1);
      // debugger
      console.log("Asset", this.newAsset);
    }

    this.filterList = {
      "Customer":{
        "results": this.filteredCustomer,
      },
      "Asset Type":{
        "results": this.newAsset,
      },
      "Asset Name":{
        "results": this.newAsset
      },
      "Location":{
        "results": this.newMovies
      }
    };

    console.log("sdfsdf"+JSON.stringify(this.filterList))
    

  }
}
