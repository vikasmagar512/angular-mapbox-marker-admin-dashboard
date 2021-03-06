import { Injectable } from '@angular/core';
import { Asset } from './asset';
import { Metric } from "./metric";
import { Agreement } from './agreement';
import { Customer } from './customer';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { normalRequest } from './Request';
import { SettingOptions } from './SettingOptions';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/index';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class dataService {

  dataNumber: Subject<number> = new BehaviorSubject<number>(0);
  currentCustomer:Subject<Customer> = new BehaviorSubject<Customer>(null);

  // dataNumberSetting = this.dataNumber.asObservable();
  constructor(private http: HttpClient) {
    // this.currentCustomer.next(null);
    // this.dataNumber=3
    // this.dataNumberSetting.subscribe((value) => {
    //   this.dataNumber = 0
    // });
  }
  changeDataNumber(dataNumber:number) {
    this.dataNumber.next(dataNumber);
  }
  changeCurrentCustomer(customer:Customer) {
    this.currentCustomer.next(customer);
  }

  detailType: string;

  detailTypes: Array<any> = ["Service Request", "Product Request", "Assets Details", "Agreement Details"];

  locationSearch = ''

  assetCategory = {
    "Coffee_Machine": "Coffee Machine",
    "Printer": "Printer",
    "Vaccum": "Vacuum"
  }

  agreementStatus = {
    "InContract": "In Contract",
    "Expired": "Expired",
    "ExpiringSoon": "Expiring Soon"
  }

  printer = {
    "types": ["Prints/Day", "Ink/Day"],
    "unit": "#"
  }

  coffee = {
    "types": ["Powder", "Cups/Day"],
    "unit": "Kg"
  }

  Vaccum = {
    "types": ["Water/Day", "Steam/Day"],
    "unit": "#"
  }

  customer: Customer = {
    "id": "123",
    "name": "demo Customer",
    "email": "demo@demo.com",
    "address": "solna solna   ",
    "contact": "12312312313",
    "img": "../../../assets/machine.svg",
  }
  /*   serviceRequest={
      "id":"123",
      "assetId":"123",
      "name":"vikas",
      "email":"vikasmagar512@gmail.com",
      "address":"vikasmagar512@gmail.com address address address address address ",
      "contact":"12312312313",
      "img":"../../../assets/machine.svg",
    } */
  serviceRequets: Array<normalRequest> = [
    {
      "requetId": "123",
      "customerId": "1",
      "parameter": {
        "id": "1",
        "name": "choco Powder",
        "unit": "kg",
      },
      "description": 'description',
      "status": 'status',
      "quantity": 'quantity',
      "RequestedOn": 'RequestedOn',
      "dueBy": 'dueBy',
      "assetCategory": 'assetCategory',
    }
  ]
  customers: Array<Customer> = [
    {
      "id": "123",
      "name": "demo2 Customer",
      "email": "demo@demo2.com",
      "address": "solna solna2   ",
      "contact": "12312312313",
      "img": "../../../assets/machine.svg",
    },
    {
      "id": "234",
      "name": "demo Customer",
      "email": "demo@demo.com",
      "address": "solna solna   ",
      "contact": "64612312312313",
      "img": "../../../assets/machine.svg",
    }
  ]

  Assets: Array<Asset> = [
    {
      /* "id": "01",
      "category": "Coffee_Machine",
      "name": "Coffee Machine",
      "status":09,
      "agreement_no":"AGR10923347",
      "location": "Solna",
      "serialno": "CM12190",
      "customer":"ABC",
      "img":"../../../assets/machine.svg", */
      "id": "01",
      "category": "Printer",
      "name": "Canon SW2014",
      "detail":"Pages Required",
      "status": 1,
      "location": "sweden",
      "agreement_no": "AGR10923347",
      "serialno": "SR12190",
      "customer": "123",
      "requestedOn":"28-08-2018",
      "dueBy":"8-09-2018",
      "quantity":"500",
      "prodName": "Pages",
      "unit": "#",
      "requestStatus":"Received",
      "img": "../../../assets/printer.svg",
      "metrics": [
        {
          // "parameter":{
          "id": "1",
          //   "name": "Choco Powder",
          //   "unit": "kg",
          // },
          "available": 45,
          "required": 10,
          "uptime": "80%",
          "usage": "300"
         },
        {
          // "parameter":{

          //   "name": "Milk Powder",
          //   "unit": "kg",
          // },
          // "category": "",
          // "unit": "kg",
          "id": "1",
          "available": 45,
          "required": 10,
          "uptime": "80%",
          "usage": "300"
        },
      ]
    },
    {
      "id": "02",
      "category": "Coffee Machine",
      "name": "Jura E8 Coffee Machine ",
      "status": 0,
      "detail":"Cleaning Milk System",
      "location": "Bromma",
      "agreement_no": "AGR10923349",
      "serialno": "SR12190",
      "customer": "234",
      "requestedOn":"29-09-2018",
      "dueBy":"18-10-2018",
      "quantity":"2 Kg",
      "prodName": "Milk Powder",
      "unit": "Kg",
      "requestStatus":"In Progress",
      "img": "../../../assets/printer.svg",
      "metrics": [
        {

          // "category": "Cartridge",
          // "unit": "#",
          "id": "2",
          "available": 15,
          "required": 20,
          "uptime": "95%",
          "usage": "2000"
        }
      ]
    },
    {
      "id": "03",
      "category": "Vacuum",
      "name": "Vacuum",
      "status": 2,
      "detail":"Servicing Required",
      "agreement_no": "AGR10923347",
      "location": "Bromma",
      "serialno": "VC12190",
      "customer": "123",
      "quantity":"1",
      "prodName": "Motor",
      "unit": "#",
      "requestedOn":"20-09-2018",
      "dueBy":"11-10-2018",
      "requestStatus":"Fulfilled",
      "img": "../../../assets/broom.svg",
      "metrics": [
        {
          // "category": "Motor",
          // "unit": "#",
          "id": "3",
          "available": 1,
          "required": 2,
          "uptime": "850%",
          "usage": "20 Hrs 80m"
        }
      ]
    },
    {
      "id": "04",
      "category": "Vacuum",
      "name": "Vacuum",
      "detail":"Servicing Required",
      "status": 1,
      "agreement_no": "AGR10923347",
      "location": "Bromma",
      "serialno": "VC12190",
      "customer": "234",
      "quantity":"2",
      "prodName": "Moto",
      "unit": "#",
      "requestedOn":"19-09-2018",
      "dueBy":"15-10-2018",
      "requestStatus":"Received",
      "img": "../../../assets/broom.svg",
      "metrics": [
        {
          // "category": "Motor",
          // "unit": "#",
          "id": "3",
          "available": 1,
          "required": 2,
          "uptime": "850%",
          "usage": "20 Hrs 80m"
        }
      ]
    }
  ];

  Agreement: Array<Agreement> = [
    {
      "id": "AGR01",
      "agreement_no": "AGR984567854",
      "type": "Annual",
      "contact": "234",
      "start_date": "14th Dec 2014",
      "end_date": "16th June 2020",
      "termination_date": "14th June 2018",
      "payment_freq": "Monthly",
      "Remaining_term": "18 months",
      "term": "80 months",
      "assets_covered": ["01", "02"],
      "prolongationDueDate": "18th June 2018",
      "status": 0,
    },
    {
      "id": "AGR02",
      "agreement_no": "AGR984567888",
      "type": "Month",
      "contact": "123",
      "start_date": "15th Dec 2014",
      "end_date": "13th April 2022",
      "termination_date": "14th April 2018",
      "payment_freq": "Weekly",
      "Remaining_term": "17 months",
      "term": "70 months",
      "assets_covered": ["03"],
      "prolongationDueDate": "19th June 2018",
      "status": 1,
    },
    {
      "id": "AGR03",
      "agreement_no": "AGR984567889",
      "type": "Month",
      "contact": "234",
      "start_date": "15th Dec 2014",
      "end_date": "13th April 2022",
      "termination_date": "14th April 2018",
      "payment_freq": "Weekly",
      "Remaining_term": "17 months",
      "term": "70 months",
      "assets_covered": ["03"],
      "prolongationDueDate": "19th June 2018",
      "status": 2,
    }
  ];

  notificationOptions: Array<SettingOptions> = [
    {
      name: "Service Request",
      id: "1",
      selected: false
    },
    {
      name: "Change in Asset status",
      id: "2",
      selected: false
    },
    {
      name: "Product Request",
      id: "3",
      selected: false
    },
    {
      name: "Change in Contract status",
      id: "4",
      selected: false
    }
  ];

  dashboardOptions: Array<SettingOptions> = [
    {
      name: "Overall Cost",
      id: "1",
      selected: false
    },
    {
      name: "Downtime",
      id: "2",
      selected: false
    },
    {
      name: "Usage",
      id: "3",
      selected: false
    },
    {
      name: "Utilization",
      id: "4",
      selected: false
    }
  ];


  dashSetting: Subject<Array<SettingOptions>> = new BehaviorSubject<Array<SettingOptions>>(this.dashboardOptions);
  currentDashSetting = this.dashSetting.asObservable();
  notifSetting: Subject<Array<SettingOptions>> = new BehaviorSubject<Array<SettingOptions>>(this.notificationOptions);
  currentNotifSetting = this.notifSetting.asObservable();

  getAgreement(): Agreement[] {
    return this.Agreement;
  }
  getAssets(): Asset[] {
    return this.Assets;
  }
  getCustomer(): Customer {
    return this.customer;
  }
  getCustomers(): Customer[] {
    return this.customers;
  }
  getAssetCategory() {
    return this.assetCategory;
  }

  getNotificationOptions() {
    return this.notificationOptions;
  }

  getDashboardOptions() {
    return this.dashboardOptions;
  }

}
