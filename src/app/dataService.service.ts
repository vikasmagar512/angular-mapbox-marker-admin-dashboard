import { Injectable } from '@angular/core';
import { Asset } from './asset';
import { Metric} from "./metric";
import { Agreement } from './agreement';
import {Customer} from './customer';
import { normalRequest } from './Request';
import { SettingOptions } from './SettingOptions';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/index';
import 'rxjs-compat/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class dataService {

  constructor() { }
  assetCategory={
    "Coffee_Machine":"Coffee Machine",
    "Printer":"Printer",
    "Vaccum":"Vaccum"
  }
  customer:Customer={
    "id":"123",
    "name":"vikas Magar",
    "email":"vikasmagar512@gmail.com",
    "address":"vikasmagar512@gmail.com address address address address address ",
    "contact":"12312312313",
    "img":"../../../assets/machine.svg",
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
  serviceRequets:Array<normalRequest>=[
    {
      "requetId":"123",
      "customerId":"1",
      "parameter":{
        "id": "1",
        "name": "choco Powder",
        "unit": "kg",
      },
      "description": 'description',
      "status":'status',
      "quantity":'quantity',
      "RequestedOn":'RequestedOn',
      "dueBy":'dueBy',
      "assetCategory":'assetCategory',
    }
  ]
  Assets: Array<Asset>=[
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
      "id": "02",
      "category": "Printer",
      "name": "Canon SW2014",
      "status":10,
      "location": "Bromma",
      "agreement_no":"AGR10923347",
      "serialno": "SR12190",
      "customer":"XYZ",
      "img":"../../../assets/printer.svg",
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
            "id": "2",
          //   "name": "Milk Powder",
          //   "unit": "kg",
          // },
          // "category": "",
          // "unit": "kg",
          "available": 45,
          "required": 10,
          "uptime": "80%",
          "usage": "300"
        },
      ]
    },
   /*  {
      "id": "02",
      "category": "Printer",
      "name": "Canon SW2014",
      "status":10,
      "location": "Bromma",
      "agreement_no":"AGR10923347",
      "serialno": "SR12190",
      "customer":"XYZ",
      "img":"../../../assets/printer.svg",
      "metrics": [
        {
          
          "category": "Cartridge",
          "unit": "#",
          "available": 15,
          "required": 20,
          "uptime": "95%",
          "usage": "2000"
        }
      ]
    },
    {
      "id": "03",
      "category": "Vaccum",
      "name": "Vaccum",
      "status":12,
      "agreement_no":"AGR10923347",
      "location": "Bromma",
      "serialno": "VC12190",
      "customer":"PQR",
      "img":"../../../assets/broom.svg",
      "metrics": [
        {
          "category": "Motor",
          "unit": "#",
          "available": 1,
          "required": 2,
          "uptime": "850%",
          "usage": "20 Hrs 80m"
        }
      ]
    } */
  ];

  Agreement: Array<Agreement> = [
    {
      "id":"AGR01",
      "agreement_no": "AGR984567854",
      "type": "Annual",
      "contact": "James Bond",
      "start_date": "12th Dec 2014",
      "end_date": "14th June 2020",
      "termination_date": "14th June 2018",
      "payment_freq": "Monthly",
      "Remaining_term": "18 months",
      "term": "80 months",
      "assets_covered": ["01", "02"]
    },
   {
      "id":"AGR02",
      "agreement_no": "AGR984567888",
      "type": "Month",
      "contact": "Tom Lee",
      "start_date": "12th Dec 2014",
      "end_date": "13th April 2022",
      "termination_date": "14th April 2018",
      "payment_freq": "Weekly",
      "Remaining_term": "17 months",
      "term": "70 months",
      "assets_covered": ["03"]
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

  getAgreement():Agreement[]{
    return this.Agreement;
  }
  getAssets():Asset[] {
    return this.Assets;
  }
  getCustomer():Customer {
    return this.customer;
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
