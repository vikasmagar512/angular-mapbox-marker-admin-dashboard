import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Subscription } from 'rxjs/index';
import { Asset } from '../../asset';
import {dataService} from '../../dataService.service';
import { normalRequest } from '../../Request';
import { Agreement } from '../../agreement';
import { AdService } from '../../ad.service';
import { filterGroup } from '../../filter-search/filterGroup';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css', '../../style.css']
})

export class TableWrapperComponent implements OnInit {
  @Input() data;
  
  // filterTypes:Array<filterGroup>;
  // subscription1: Subscription;

  // constructor(private dataService: dataService, private filterService : AdService) {
  //   this.filterTypes = this.filterService.getFilters();
  //   // this.filterTypes = filterService.filterTypes;
  //   this.subscription1 = filterService.filterChange$.subscribe((value:Array<filterGroup>) => {
  //     this.filterTypes = value;
  //   });
  // }
  constructor(private dataService: dataService) {
    // this.filterTypes = this.filterService.getFilters();
    // // this.filterTypes = filterService.filterTypes;
    // this.subscription = filterService.filterChange$.subscribe((value:Array<filterGroup>) => {
    //   this.filterTypes = value;
    //   debugger
    //   // console.log('')
    // });
  }
  
  // filterTypes:Array<filterGroup>;
  // subscription: Subscription;

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
    { title: 'Status', name: 'assetStatus',filtering: { filterString: '', placeholder: 'Filter by status' }, sort: false, filter: 'text' },
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
  ngOnInit() {
    // debugger;
    // console.log(this.data)
    
    this.loadTable(this.dataService.dataNumber);

    this.assetDetail = this.dataService.getAssets();

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
  }
}
