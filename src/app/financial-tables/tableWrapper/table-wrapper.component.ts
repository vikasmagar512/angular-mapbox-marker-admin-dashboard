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

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css', '../../style.css']
})

export class TableWrapperComponent implements OnInit, OnChanges {
  // @Input() data;

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


  public filterTypesReceived: Array<filterGroup>;

  constructor(private dataService: dataService, private adService: AdService, private modalService: BsModalService) {

  }
  public modalRef: BsModalRef; // {1}

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
    debugger;
    this.productIdSelected = event
    this.productCurrentObj = this.productRequestData.find((item) => item['id'] == this.productIdSelected)
    this.openModal(this.ProductTemplate)
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    alert('changes')
    debugger
    // if(changes.activeComponent){
    //   this.currentAdIndex = changes.activeComponent.currentValue
    // }
    // this.loadComponent();
  }

  loadTable(num: number) {
    this.dataService.detailType = this.dataService.detailTypes[num];
    console.log(`loadTable${num}`);
    this.dataService.dataNumber = num;
    // $(`.sieBtn`).removeClass('active');
    // $(`.${this.dataService.dataNumber}num`).addClass('active');
  }

  assetDetail: Array<Asset>;
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
    { title: 'Asset Id', name: 'id', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
    { title: 'Asset Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
    { title: 'Asset Type', name: 'type', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
    { title: 'Customer', className: ['text-warning'], name: 'customer', filter: 'text' },
    { title: 'Agreement', className: ['text-warning'], name: 'agreement', filter: 'text' },
    { title: 'Status', name: 'assetStatus', filtering: { filterString: '', placeholder: 'Filter by status' }, sort: false, filter: 'text' },
    { title: 'Location', name: 'location', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' }, filter: 'text' },
  ];
  public agreementColumns: Array<any> = [
    { title: 'Agreement Number', name: 'id', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
    { title: 'Customer', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
    { title: 'Start Date', name: 'start_date', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
    { title: 'End Date', className: ['text-warning'], name: 'end_date', filter: 'text' },
    { title: 'Prolongation Due Date', name: 'prolongationDueDate', sort: false, filter: 'text' },
    { title: 'Status', className: ['text-warning'], name: 'agreementStatus', filter: 'text' },

    // {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'},filter:'text'},

  ];
  applyFilterBottom() {
    debugger
    // this.filterTypesReceived.map((item)=>{
    let k, p;
    // this.onSearchKey('vaccum')
    // this.assetTableRef.globalSearch('vaccum')

    if(this.filterTypesReceived[0].filterType==="ASSET_STATUS"){
      k =  this.filterTypesReceived[0].filterArray.find(item=>item.value)
      debugger
      if(k){
       p = k['id'] - 1
       debugger
       switch(p){
          case 0 :
          this.onSearchKey('vaccum')
          break;
          case 1 :
          this.onSearchKey('canon')
          break
          case 2 :
          this.onSearchKey('asdfasdf')
          break;
          default:
          this.onSearchKey('')
       }
      }else{
        this.onSearchKey('')
      }

    }
    // })
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
    // this.searchValue = value;
    debugger;
    this.assetTableRef.globalSearch(value)
    // this.serviceRequestTableRef.globalSearch(this.searchValue)
    // this.productRequestTableRef.globalSearch(this.searchValue)
    // this.agreementTableRef.globalSearch(this.searchValue)
  }
  ngOnInit() {
    // debugger;
    // console.log(this.data)
    debugger
    // console.log(this.data)
    // this.searchBox = this.data.location;

    // setTimeout(()=>{
    //   this.onSearchKey('no')
    // },2000)
    // setTimeout(()=>{
    //   this.onSearchKey('not')
    // },4000)
    // https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/

    this.loadTable(this.dataService.dataNumber);

    this.assetDetail = this.dataService.getAssets();

    debugger;
    this.assetData = this.assetDetail.reduce((acc, asset: Asset) => {
      /* let stat:'asset.status';
      console.log("stat"); */
      return acc.concat({
        "id": asset.id,
        /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
        "name": asset.name,
        "type": asset.category,
        "customer": asset.customer,
        "agreement": asset.agreement_no,
        "location": asset.location,

        /*
              "status":'<span>'+
                       '<img src="../../assets/stat.svg">'+
                       '</span>'
        */
        // "status":`<span><img src="../../assets/${asset.status}.png"></span>`,
        "assetStatus": '<img src="../../assets/' + (!asset.status ? '09.png' : (asset.status === 1 ? '10.png' : '12.png')) + '" class="ass-size">',

      });
    }, []);

    this.agreementDetail = this.dataService.getAgreement();

    this.agreementData = this.agreementDetail.reduce((acc, asset: Agreement) => {
      /* let stat:'asset.status';
      console.log("stat"); */
      return acc.concat({
        "id": asset.agreement_no,
        /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
        "name": asset.contact,
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
        "agreementStatus": '<img src="../../assets/' + (!asset.status ? '09.png' : (asset.status === 1 ? '10.png' : '12.png')) + '" class="ass-size">',


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
      { title: 'Request Id', name: 'id', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Request Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Request Type', name: 'type', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Customer', className: ['text-warning'], name: 'customer', filter: 'text' },
      { title: 'Agreement', className: ['text-warning'], name: 'agreement', filter: 'text' },
      { title: 'Status', name: 'status', sort: false, filter: 'text' },
      { title: 'Location', name: 'location', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' }, filter: 'text' },
    ];
    this.serviceRequestData = this.assetDetail.reduce((acc, asset: Asset) => {
      /* let stat:'asset.status';
      console.log("stat"); */
      return acc.concat({
        "id": asset.id,
        /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
        "name": asset.name,
        "type": asset.category,
        "customer": asset.customer,
        "agreement": asset.agreement_no,
        "location": asset.location,
        "status": `<span><img src="../../assets/${asset.status}.png"></span>`
      });
    }, []);


    this.serviceRequestConfig = {
      paging: true,
      sorting: { columns: this.serviceRequestColumns },
      filtering: { filterString: '' },
      className: ['third-t', 's-table', 'table-striped', 'table-bordered']
    };

    this.productRequestColumns = [
      { title: 'Request Id', name: 'id', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Product Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Request Type', name: 'type', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Customer', className: ['text-warning'], name: 'customer', filter: 'text' },
      { title: 'Agreement', className: ['text-warning'], name: 'agreement', filter: 'text' },
      { title: 'Status', name: 'status', sort: false, filter: 'text' },
      { title: 'Location', name: 'location', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' }, filter: 'text' },
    ];
    this.productRequestData = this.assetDetail.reduce((acc, asset: Asset) => {
      /* let stat:'asset.status';
      console.log("stat"); */
      return acc.concat({
        "id": asset.id,
        /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
        "name": asset.name,
        "type": asset.category,
        "customer": asset.customer,
        "agreement": asset.agreement_no,
        "location": asset.location,
        "status": `<span><img src="../../assets/${asset.status}.png"></span>`
      });
    }, []);


    this.productRequestConfig = {
      paging: true,
      sorting: { columns: this.productRequestColumns },
      filtering: { filterString: '' },
      className: ['third-t', 's-table', 'table-striped', 'table-bordered']
    };
    var that = this;
    // this.data.filterTypes.subscribe(message => {
    this.adService.filterChange.subscribe(message => {
      debugger
      this.filterTypesReceived = message
      // setTimeout(()=>{
      //   this.applyFilterBottom()
      //   },2000)

      setTimeout(()=>{
          // this.applyFilterBottom()
      //   alert('d')
      //   debugger
      //   this.assetTableRef.globalSearch('Canon')
      },1000)
    })
    setTimeout(()=>{
      this.newColumnSearchTable()
    },3000)
  }
  newColumnSearchTable(){
    let newAssetColumns: Array<any> = [
      { title: 'Asset Id', name: 'id', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Asset Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Asset Type', name: 'type', filtering: { filterString: 'printer', placeholder: 'Filter by name' }, filter: 'text' },
      { title: 'Customer', className: ['text-warning'], name: 'customer', filter: 'text' },
      { title: 'Agreement', className: ['text-warning'], name: 'agreement', filter: 'text' },
      { title: 'Status', name: 'assetStatus', filtering: { filterString: '', placeholder: 'Filter by status' }, sort: false, filter: 'text' },
      { title: 'Location', name: 'location', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' }, filter: 'text' },
    ];
    this.assetTableRef.newColumnSearch(newAssetColumns)
  }

}
