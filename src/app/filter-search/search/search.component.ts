import { Component, OnInit, TemplateRef, ViewChild, ElementRef, Renderer } from '@angular/core';
import { dataService } from '../../dataService.service';
import { AdService } from '../../ad.service';
import { FormControl } from '@angular/forms';
import { Asset } from '../../asset';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Customer } from '../../customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  customersList: any;
  isEmpty: boolean = false;
  newAssetLocaion: any[];
  newAssetName: any[];
  newAssetCatagory: any[];
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
    { name: 'Asset Type', value: true },
    { name: 'Asset Name', value: true },
    { name: 'Location', value: true }
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
    debugger;
    this.movies = this.filterService.getMovies();
    this.Asset = this.data.getAssets();
    this.customers = this.data.getCustomers();
    this.filterList = {
      "Customer": {
        "results": [],
      },
      "Asset Type": {
        "results": [],
      },
      "Asset Name": {
        "results": []
      },
      "Location": {
        "results": []
      }
    };
  }

  // onFilter() {

  // }

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

  onClickSearchBox(value: string){
    if(value == ""){
      this.isEmpty = true;
    }
  }


  customnerSelected(customer: any){
    debugger;
    this.customersList = this.data.getCustomers();
    this.data.currentCustomer = this.customersList.find((item)=>item.id ==customer.id)
    debugger;
    $('.search input').val("");
    
  }

  onKey(value: string) {
    debugger;
    this.locationSearchBox = value.toLowerCase();
    this.filterService.changeLocation(this.locationSearchBox)

    console.log(this.locationSearchBox);
    if (!value.trim()) {
      this.newAssetLocaion = [];
    }
    else {
      this.newAssetLocaion = this.Asset.filter(asset => asset.location.toLowerCase().indexOf(this.locationSearchBox) > -1);
      console.log(this.newAssetLocaion);
    }

    if (!value.trim()) {
      this.filteredCustomer = [];
    }
    else {
      this.filteredCustomer = this.customers.filter(customer => customer.name.toLowerCase().indexOf(this.locationSearchBox) > -1);
      console.log(this.filteredCustomer);
    }

    if (!value.trim()) {
      this.newAssetCatagory = [];
    }
    else {
      this.newAssetCatagory = this.Asset.filter(asset => asset.category.toLowerCase().indexOf(this.locationSearchBox) > -1);
      // debugger
      console.log("Asset", this.newAssetCatagory);
    }

    if (!value.trim()) {
      this.newAssetName = [];
    }
    else {
      this.newAssetName = this.Asset.filter(asset => asset.name.toLowerCase().indexOf(this.locationSearchBox) > -1);
      // debugger
      console.log("Asset", this.newAssetCatagory);
    }

    // debugger;
    if (value === "" || value === undefined) {
      this.isEmpty = true;
      // this.filterList = {
      //   "Customer": {
      //     "results": this.customers,
      //   },
      //   "Asset Type": {
      //     "results": this.Asset,
      //   },
      //   "Asset Name": {
      //     "results": this.Asset
      //   },
      //   "Location": {
      //     "results": this.Asset
      //   }
      // };
      this.filterList = {
        "Customer": {
          "results": [],
        },
        "Asset Type": {
          "results": [],
        },
        "Asset Name": {
          "results": []
        },
        "Location": {
          "results": []
        }
      };
    }
    else {
      this.isEmpty = false;
      this.filterList = {
        "Customer": {
          "results": this.filteredCustomer,
        },
        "Asset Type": {
          "results": this.newAssetCatagory,
        },
        "Asset Name": {
          "results": this.newAssetName
        },
        "Location": {
          "results": this.newAssetLocaion
        }
      };
    }

    // console.log("sdfsdf" + JSON.stringify(this.filterList))

  }
}
