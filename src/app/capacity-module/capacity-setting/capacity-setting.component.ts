import { Component, OnInit } from '@angular/core';
import { dataService } from '../../dataService.service';

@Component({
  selector: 'app-capacity-setting',
  templateUrl: './capacity-setting.component.html',
  styleUrls: ['./capacity-setting.component.css']
})
export class CapacitySettingComponent implements OnInit {

  public assetCatagory: any = [];
  public types: any;
  public units: any;

  constructor(
    private dataService: dataService,
  ) { }

  ngOnInit() {
    this.getAssetCatagory();
    this.assetSelected("Coffee Machine");
  }

  getAssetCatagory() {
    for (const key of Object.keys(this.dataService.assetCategory)) {
      this.assetCatagory.push(this.dataService.assetCategory[key])
    }
  }

  assetSelected(asset) {
    // debugger;

    switch (asset) {
      case "Coffee Machine":
        this.types = this.dataService.coffee["types"];
        this.units = this.dataService.coffee["unit"];
        break;
      case "Printer":
        this.types = this.dataService.printer["types"];
        this.units = this.dataService.printer["unit"];
        break;
      case "Vacuum":
        this.types = this.dataService.Vaccum["types"];
        this.units = this.dataService.Vaccum["unit"];
        break;
    }
  }
}
