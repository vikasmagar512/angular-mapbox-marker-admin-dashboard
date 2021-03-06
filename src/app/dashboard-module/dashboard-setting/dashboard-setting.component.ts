import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SettingOptions } from '../../SettingOptions';
import { dataService } from '../../dataService.service';
import { AdService } from '../../ad.service';
import { filterGroup } from '../../filter-search/filterGroup';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styleUrls: ['./dashboard-setting.component.css']
})
export class DashboardSettingComponent implements OnInit {
  @ViewChild('field') elField: ElementRef;
  @ViewChild('selectField') elSelectField: ElementRef;
  userList: any = [];

  selectedUserList: any = [];
  allUsers: any = []
  userList1: Array<SettingOptions> = []
  notSelectedUserList: any = [];
  selectedCountry: any;
  optionsSettings: Array<SettingOptions>;

  filterTypes: Array<filterGroup>;
  subscription1: Subscription;

  public customerNames: any = [];


  constructor(private _options: dataService, private filterService: AdService) {
    this.filterTypes = this.filterService.getFilters();
    // this.filterTypes = filterService.filterTypes;
    this.subscription1 = filterService.filterChange.subscribe((value: Array<filterGroup>) => {
      this.filterTypes = value;
    });
    this.getUserList();
    this.getCustomersList();
  }


  // constructor(private _options:dataService, private filterService : AdService) {
  //   this.getUserList();
  // }
  getCustomersList() {
    this.customerNames = this._options.customers.reduce((acc,item)=> (acc.concat(item['name'])),[])
  }

  getUserList() {
    this._options.currentDashSetting.subscribe(message => {
      console.log('message ', message)
      this.optionsSettings = message
      // this.userList = response["data"];
      this.userList = message;
      for (let user of this.userList) {
        // var tempUser = new memberUser(user)
        this.allUsers.push(user);
        // var tempUser1 = new memberUser(user)
        this.notSelectedUserList.push(user);
      }
    })
  }
  findField = (allUsers, v: any): any => allUsers.find((f) => f.name === v)
  findNotSelectedVariable = (notSelectedUserList, nm: string): number => notSelectedUserList.findIndex((item) => nm === item.name)
  findSelectedVariable = (selectedUserList, nm: string) => selectedUserList.findIndex((item) => nm === item.name)

  arrowClick(valueStatus: boolean, all: boolean = false) {
    let option = valueStatus ? this.elField.nativeElement.options : this.elSelectField.nativeElement.options;
    for (let l of option) {
      let v: any = this.findField(this.allUsers, l.value);
      if (l.selected || all) {
        if (valueStatus) {
          //right arrow click
          this.selectedUserList.push(v);
          this.notSelectedUserList.splice(this.findNotSelectedVariable(this.notSelectedUserList, v.name), 1);
        } else {
          //left arrow click
          this.notSelectedUserList.push(v);
          this.selectedUserList.splice(this.findSelectedVariable(this.selectedUserList, v.name), 1);
        }
      }
    }
  }

  //message:string;
  ngOnInit() {

  }


}
