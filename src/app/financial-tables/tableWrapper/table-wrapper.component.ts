import { Component, Input, OnDestroy, OnInit, SimpleChange, OnChanges, ViewChild, TemplateRef } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Subscription } from 'rxjs/index';
import { Asset } from '../../asset';
import { dataService } from '../../dataService.service';
import { normalRequest } from '../../Request';
import { Agreement } from '../../agreement';
import { AdService } from '../../ad.service';
import { filterGroup } from '../../filter-search/filterGroup';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Customer } from '../../customer';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css', '../../style.css','../../table.css']
})

export class TableWrapperComponent implements OnInit, OnChanges {
  // @Input() data;
  detailType: string;
  dataNumber: number;
  agreementIdSelected: string;
  agreementCurrentObj: any;

  assetCurrentObj: any;
  assetIdSelected: string;

  serviceCurrentObj: any;
  serviceIdSelected: string;

  productCurrentObj: any;
  productIdSelected: string;

  customerCurrentObj: any;
  customerId: string;
  _subscription: any;
  _subscription1: any;
  currentCustomer:Customer;
  

  public filterTypesReceived: Array<filterGroup>;

  constructor(private dataService: dataService, private adService: AdService, private modalService: BsModalService) {
    this.detailType = dataService.detailType;
    this.dataNumber = 0;
    // this.loadTable(this.dataNumber);
    this._subscription = this.dataService.dataNumber.subscribe((value) => {
      this.dataNumber = value
      this.adService.disableFilter(this.dataNumber)
    })
    this._subscription1 = this.dataService.currentCustomer.subscribe((value:Customer) => {
      this.currentCustomer = value;
      this.constructServiceTable()
      alert(this.currentCustomer)
      debugger
    });
  }
  public modalRef: BsModalRef; // {1}
  constructServiceTable(){
    this.serviceRequestData = this.assetDetail.reduce((acc, asset: Asset) => {
      if(this.currentCustomer !== null){
        if(asset.customer === this.currentCustomer.id){
          alert('found')
          return acc.concat({
            "id": asset.id,
            /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
            // "detail": asset.detail,
            "name": asset.detail,
            "customer": asset.customer,
            "type": asset.category,
            "requestedOn": asset.requestedOn,
            "dueBy": asset.dueBy,
            "status": asset.requestStatus
          })
        } else{
          return acc
        }
      }else {
        alert('not found')
        return acc.concat({
          "id": asset.id,
          /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
          // "detail": asset.detail,
          "name": asset.detail,
          "customer": asset.customer,
          "type": asset.category,
          "requestedOn": asset.requestedOn,
          "dueBy": asset.dueBy,
          "status": asset.requestStatus
        })
      }
    },[]); 
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' }); // {3}
  }
  openAssetModal(event) {
    this.assetIdSelected = event;
    this.assetCurrentObj = this.assetData.find((item) => item['id'] === this.assetIdSelected)
    this.openModal(this.AssetTemplate)
  }

  openAgreementModal(event) {
    this.agreementIdSelected = event;
    this.agreementCurrentObj = this.agreementData.find((item) => item['id'] === this.agreementIdSelected)
    this.openModal(this.AgreementTemplate)
  }

  openServiceModal(event) {
    this.serviceIdSelected = event;
    this.serviceCurrentObj = this.serviceRequestData.find((item) => item['id'] === this.serviceIdSelected)
    this.openModal(this.ServiceTemplate)
  }

  openCustomerModal(event) {
    this.customerId = "123"
    this.customerCurrentObj = this.dataService.customers.find((item) => item['id'] == this.customerId)
    this.openModal(this.CustomerTemplate)
  }

  openProductModal(event) {
    // debugger;
    this.productIdSelected = event
    this.productCurrentObj = this.productRequestData.find((item) => item['id'] == this.productIdSelected)
    this.openModal(this.ProductTemplate)
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    alert('changes')
    // debugger
    // if(changes.activeComponent){
    //   this.currentAdIndex = changes.activeComponent.currentValue
    // }
    // this.loadComponent();
  }

  loadTable(num: number) {

    setTimeout(() => {
      $('input[placeholder="aggreementSearch"],input[placeholder="assetSearch"]').hide();
      // $('').hide();
    }, 1)

    this.detailType = this.dataService.detailTypes[num];
    console.log(`loadTable${num}`);
    // this.dataService.dataNumber = num;
    this.dataService.changeDataNumber(num)
    // this.adService.flushFilters()
    debugger
    this.adService.disableFilter(num)
    // this.adService.disableFilter(this.dataNumber)

    // this.activeTable = this.dataService.dataNumber;
    // $(`.sieBtn`).removeClass('active');
    // $(`.${this.dataService.dataNumber}num`).addClass('active');
  }

  assetDetail: Array<Asset> = [];
  assetData: Array<any>;
  assetConfig: any;

  agreementDetail: Array<Agreement>;
  agreementData: Array<any>;
  agreementConfig: any;

  serviceRequestData: Array<normalRequest>
  serviceRequestConfig: any;
  serviceRequestColumns: Array<any>

  productRequestData: Array<normalRequest>
  productRequestConfig: any;
  productRequestColumns: Array<any>

  // detailTypes: Array<any> = ["Service Request", "Product Request", "Assets Details", "Agreement Details"];
  // detailType: string;

  public assetColumns: Array<any> = [
    { title: 'Asset Id', name: 'id', filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'Asset Name', name: 'name', filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'Asset Type', name: 'assetType', filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'Customer', className: ['text-warning'], name: 'customer', filter: 'text' },
    { title: 'Agreement', className: ['text-warning'], name: 'agreement', filter: 'text' },
    // { title: 'Status', name: 'assetStatus', filtering: { filterString: '', placeholder: 'Filter by status' }, sort: false, filter: 'text' },
    { title: 'Status', name: 'assetStatus', filtering: { filterString: '', placeholder: 'assetSearch' }, sort: false },
    { title: 'Location', name: 'location', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' }, filter: 'text' },
  ];
  public agreementColumns: Array<any> = [
    { title: 'Agreement Number', name: 'id', filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'Customer', name: 'customer', filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'Start Date', name: 'start_date', filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'End Date', className: ['text-warning'], name: 'end_date', filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'Prolongation Due Date', name: 'prolongationDueDate', sort: false, filtering: { filterString: '', placeholder: 'Search' }, filter: 'text' },
    { title: 'Status', className: ['text-warning'], name: 'agreementStatus', filtering: { filterString: '', placeholder: 'aggreementSearch' }, filter: 'text' },
    // {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'},filter:'text'},
  ];
  addFilterString = (columns, reflect: object) => columns.map((item) =>
    reflect.hasOwnProperty(item.name) ? { ...item, filtering: { ...item.filtering, filterString: reflect[item.name] } } : item
  )
  // newColumnSearchTable(reflect={'type':'printer','assetStatus':'Not working'}){
  newColumnSearchTable(reflect: object) {
    // debugger
    // let reflect = {'type':'printer','assetStatus':'Not working'}
    debugger
    if (this.dataNumber === 2) {
      let newAssetColumns = this.addFilterString(this.assetColumns, reflect)
      // debugger
      this.assetTableRef.newColumnSearch(newAssetColumns)
    }
    if (this.dataNumber === 1) {
      let newProductColumns = this.addFilterString(this.productRequestColumns, reflect)
      // debugger
      this.productRequestTableRef.newColumnSearch(newProductColumns)
    }
    if (this.dataNumber === 3) {
      let agreementColumns = this.addFilterString(this.agreementColumns, reflect)
      // debugger
      this.agreementTableRef.newColumnSearch(agreementColumns)
    }
  }

  applyFilterBottom() {
    // debugger
    let k, p;
    let obj = {}
    this.filterTypesReceived.map((filterTypeItem) => {
      // let search = this.dataService.dataNumber === 0 && (["ASSET_STATUS", "ASSET_TYPE"].indexOf(filterTypeItem.filterType) !== -1) ||

      let search = this.dataNumber === 2 && (['ASSET_STATUS', 'ASSET_TYPE'].indexOf(filterTypeItem.filterType) !== -1) //asset
        || this.dataNumber === 1 && (['ASSET_TYPE'].indexOf(filterTypeItem.filterType) !== -1)  //prduct
        || this.dataNumber === 3 && (["CONTRACT_STATUS"].indexOf(filterTypeItem.filterType) !== -1) //agreement
      // debugger
      if (search) {
        k = filterTypeItem.filterArray.find(item => item.value)
        // debugger
        obj[filterTypeItem.filterId] = k ? k.displayText : ''
      }
    })
    this.newColumnSearchTable(obj)
  }

  @ViewChild('assetTable') assetTableRef;
  @ViewChild('AssetTemplate') AssetTemplate: TemplateRef<any>;

  @ViewChild('agreementTable') agreementTableRef;
  @ViewChild('AgreementTemplate') AgreementTemplate: TemplateRef<any>;

  @ViewChild('CustomerTemplate') CustomerTemplate: TemplateRef<any>;

  @ViewChild('serviceRequestTable') serviceRequestTableRef;
  @ViewChild('ServiceTemplate') ServiceTemplate: TemplateRef<any>;

  @ViewChild('productRequestTable') productRequestTableRef;
  @ViewChild('ProductTemplate') ProductTemplate: TemplateRef<any>;

  onSearchKey(value: string) {
    this.assetTableRef.globalSearch(value)
  }
  ngOnInit() {

    this.assetDetail = this.dataService.getAssets();

    // debugger;
    this.assetData = this.assetDetail.reduce((acc, asset: Asset) => {
      /* let stat:'asset.status';
      console.log("stat"); */
      return acc.concat({
        "id": asset.id,
        /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
        "name": asset.name,
        "assetType": asset.category,
        "customer": asset.customer,
        "agreement": asset.agreement_no,
        "location": asset.location,
        /*
              "status":'<span>'+
                       '<img src="../../assets/stat.svg">'+
                       '</span>'
        */
        // "status":`<span><img src="../../assets/${asset.status}.png"></span>`,
        "assetStatus": '<img src="../../assets/' + (!asset.status ? '09.png' : (asset.status === 1 ? '10.png' : '12.png')) + '" class="ass-size" alt="' + (!asset.status ? 'Not Working' : (asset.status === 1 ? 'Service Required' : 'Working')) + '">',
      });
    }, []);

    this.agreementDetail = this.dataService.getAgreement();

    this.agreementData = this.agreementDetail.reduce((acc, asset: Agreement) => {
      /* let stat:'asset.status';
      console.log("stat"); */
      return acc.concat({
        "id": asset.agreement_no,
        /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
        "customer": asset.contact,
        "type": asset.type,
        "start_date": asset.start_date,
        "end_date": asset.end_date,
        "agreement": asset.start_date,
        "prolongationDueDate": asset.prolongationDueDate,
        // "location":asset.status.toString(),
        /*
            "status":'<span>'+
                     '<img src="../../assets/stat.svg">'+
                     '</span>'
        */
        // "status":`<span><img src="../../assets/${asset.status}.png"></span>`,

        // "agreementStatus": '<img src="../../assets/' + (!asset.status ? '09.png' : (asset.status === 1 ? '10.png' : '12.png')) + '" alt="' + (!asset.status ? 'Expired' : (asset.status === 1 ? 'Expiring Soon' : 'In Contract')) + '" class="ass-size">',
        "agreementStatus": '<img src="../../assets/' + (!asset.status ? '15.png' : (asset.status === 1 ? '14.png' : '13.png')) + '" alt="' + (!asset.status ? 'Expired' : (asset.status === 1 ? 'Expiring Soon' : 'In Contract')) + '" class="ass-size">',
      });
    }, []);

    this.assetConfig = {
      paging: true,
      sorting: { columns: this.assetColumns },
      filtering: { filterString: '' },
      className: ['third-t', 's-table', 'table-striped', 'table-bordered']
    };

    this.agreementConfig = {
      paging: true,
      sorting: { columns: this.agreementColumns },
      filtering: { filterString: '' },
      className: ['third-t', 's-table', 'table-striped', 'table-bordered']
    };
    this.serviceRequestColumns = [
      {title: 'Request Id', name: 'id', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Request Details', name: 'name', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Customer', className: ['text-warning'], name: 'customer', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Asset Name', name: 'type', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Requested On', className: ['text-warning'], name: 'requestedOn', filter: 'text'},
      {title: 'Due By', name: 'dueBy', sort: '', filter: 'text'},
      {title: 'Status', name: 'status', sort: false, filter: 'text'},
    ];
   
    this.serviceRequestConfig = {
      paging: true,
      sorting: { columns: this.serviceRequestColumns },
      filtering: { filterString: '' },
      className: ['third-t', 's-table', 'table-striped', 'table-bordered']
    };

    this.productRequestColumns = [
      {title: 'Request Id', name: 'id', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Product', name: 'name', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Asset Type', name: 'assetType', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Customer', className: ['text-warning'], name: 'customer', filtering: {filterString: '', placeholder: 'Search'}, filter: 'text'},
      {title: 'Quantity', className: ['text-warning'], name: 'quantity', filter: 'text'},
      {title: 'Requested On', className: ['text-warning'], name: 'requestedOn', filter: 'text'},
      {title: 'Due By', name: 'dueBy', sort: '', filter: 'text'},
      {title: 'Status', name: 'status', sort: false, filter: 'text'},
    ];
    this.productRequestData = this.assetDetail.reduce((acc, asset: Asset) => {
      return acc.concat({
        "id": asset.id,
        /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
        // "detail": asset.detail,
        "name": asset.prodName,
        "customer": asset.customer,
        "assetType": asset.category,
        "quantity":asset.quantity,
        "requestedOn": asset.requestedOn,
        "dueBy": asset.dueBy,
        "status": asset.requestStatus
      });
    }, []);


    this.productRequestConfig = {
      paging: true,
      sorting: { columns: this.productRequestColumns },
      filtering: { filterString: '' },
      className: ['third-t', 's-table', 'table-striped', 'table-bordered']
    };
    var that = this;
    this.adService.filterChange.subscribe(message => {
      // debugger
      this.filterTypesReceived = message

      setTimeout(() => {
        this.applyFilterBottom()
      }, 1000)
    })
  }
}
