import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Person} from '../../post/Person';
import {Http} from '@angular/http';
import {MyPost} from '../../post/mypost';
import {Subject} from 'rxjs/index';
import {Asset} from '../../asset';
import {dataService} from '../../dataService.service';
import {MyPostService} from '../../post/mypost.service';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.css','../../style.css']
})

export class TableWrapperComponent implements OnInit{

  dataNumber:number = 0;
  loadTable(num:number){
    console.log(`loadTable${num}`)
    this.dataNumber = num
    $(`.sieBtn`).removeClass('active');
    $(`.${this.dataNumber}num`).addClass('active');
  }

  assetDetail:Array<Asset>;
  assetData: Array<any>;
  constructor(private dataService: dataService){}
  ngOnInit() {
    this.assetDetail = this.dataService.getAssets();

   
    this.assetData = this.assetDetail.reduce((acc,asset:Asset) => {
      /* let stat:'asset.status';
      console.log("stat"); */
      return acc.concat({
      "id": ' asset.id',
      /* "name":  '<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>', */
      "name":'asset.name',
      "type":'asset.category',
      "customer":'asset.customer',
      "agreement":'asset.agreement',
      "location":'asset.location',
      "status":'<span>'+
               '<img src="../../assets/stat.svg">'+
               '</span>'
      
    });
  },[]);
  }

  public assetColumns:Array<any> = [
    {title: 'Asset Id', name: 'id', filtering: {filterString: '', placeholder: 'Filter by name'},filter:'text'},
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'},filter:'text'},
    {title: 'Asset Type', name: 'type', filtering: {filterString: '', placeholder: 'Filter by name'},filter:'text'},
    {title: 'Customer', className:[ 'text-warning'], name: 'customer',filter:'text'},
    {title: 'Agreement', className:[ 'text-warning'], name: 'agreement',filter:'text'},
    {title: 'Status',name: 'status',sort: false,filter:'text'},
    {title: 'Location', name: 'location', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'},filter:'text'},
   
  ];
  public assetConfig:any = {
    paging: true,
    sorting: {columns: this.assetColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-striped', 'table-bordered']
  };
}
