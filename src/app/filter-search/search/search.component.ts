import { Component, OnInit, TemplateRef, ViewChild, ElementRef, Renderer } from '@angular/core';
import { dataService } from '../../dataService.service';
import { AdService } from '../../ad.service';
import { FormControl } from '@angular/forms';
import { Asset } from '../../asset';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Customer } from '../../customer';
import { filterGroup } from '../filterGroup';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentCustomer: Customer;
  subscription: Subscription;
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
  // isSearchLocation: boolean = false;

  showDropdown: boolean = false;

  showFilters: boolean = false
  filters = [
    { name: 'Customer', value: true },
    { name: 'Asset Type', value: true },
    { name: 'Asset Name', value: true },
    { name: 'Location', value: true }
  ];
  public modalRef: BsModalRef;
  constructor(private filterService: AdService,
    private modalService: BsModalService,
    private dataService: dataService,
    private renderer: Renderer) {
    this.subscription = this.dataService.currentCustomer.subscribe((value: Customer) => {
      this.currentCustomer = value;
      debugger
    });
  }
  updateFilterState($event, filter) {
    // debugger
  }
  resetCustomer() {
    this.dataService.changeCurrentCustomer(null)
  }

  ngOnInit() {
    debugger;
    this.movies = this.filterService.getMovies();
    this.Asset = this.dataService.getAssets();
    this.customers = this.dataService.getCustomers();
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

  onClickSearchBox(value: string) {
    if (!value) {
      this.isEmpty = true;
    }
    else {
      this.isEmpty = false;
      this.onKey(value);
    }
    // this.isEmpty = value==="" ? true : false;

  }

  customnerSelected(customer: any) {
    this.showDropdown = false;
    this.customersList = this.dataService.getCustomers();
    this.dataService.changeCurrentCustomer(this.customersList.find((item) => item.id == customer.id))
    $('.search input').val("");
  }

  locationSelected(location: string) {
    let locationSearchBox = location.toLowerCase();
    this.filterService.changeLocation(locationSearchBox);
    this.showDropdown = false;
    $('.search input').val("");
  }

  onSearchBoxBlur() {
    let that = this;
    $(document).click(function (e) {
      if (!$(e.target).is("#cust-dropdown-menu")) {
        // $("#basic-link").hide();
        that.showDropdown = false;
      }
    });
  }

  onKey(value: string) {
    this.showDropdown = true;
    // this.locationSearchBox = value.toLowerCase();

    // this.filterService.changeLocation(this.locationSearchBox)

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
    if (!value) {
      this.isEmpty = true;
      this.showDropdown = false
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

    // if (this.isSearchLocation) {
    //   debugger;
    //   this.locationSearchBox = value.toLowerCase();
    //   this.filterService.changeLocation(this.locationSearchBox)
    //   this.isSearchLocation = false;
    //   $('.search input').val("");
    //   this.locationSearchBox = null;
    // }

  }
}
