import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from './ad-item';
import {TechnologyComponent} from './post/technology.component';
import {ArticleComponent} from './post/article.component';
import {MapComponent} from './map/map/map.component';
import {ClusterComponent} from './map/cluster/cluster.component';
import {MyPostBannerComponent} from './post/mypost-banner.component';
import {TableWrapperComponent} from './financial-tables/tableWrapper/table-wrapper.component';
import {filter} from './filter-search/filter';
import {filterGroup} from './filter-search/filterGroup';
import {Subject} from 'rxjs/index';

@Injectable()
export class AdService {
  filterTypes:Array<filterGroup>;
  info:Object;
  counter:number;
  change(){
    this.info['name']= "Jane" + this.counter;
    this.counter = this.counter + 1;
  }
  // EventEmitter should not be used this way - only for `@Output()`s
  //nameChange: EventEmitter<string> = new EventEmitter<string>();
  filterChange: Subject<Array<filterGroup>> = new Subject<Array<filterGroup>>();
  // _subscription=new Subject<Array<filterGroup>>();

  // Observable string streams
  filterChange$ = this.filterChange.asObservable();

  constructor() {
    this.counter=0;
    this.info = { name : "Jack"+this.counter };

    this.filterTypes=[]
    this.contractFilter = {
      filterDisplayText:"Contract",
      filterArray:[
        {
          id:"1",
          name:"inContract",
          displayText:"In Contract",
          type:"contract",
          value:false,
          image:'../../../assets/13.png',
        },
        {
          id:"2",
          name:"expired",
          displayText:"Expired",
          type:"contract",
          value:false,
          image:'../../../assets/14.png'
        },
        {
          id:"3",
          name:"expiringSoon",
          displayText:"Expiring Soon",
          type:"contract",
          value:false,
          image:'../../../assets/15.png'
        },
      ]
    }
    this.assetStatusFilter = {
      filterDisplayText:"assetStatus",
      filterArray:[
        {
          id:"1",
          name:"notWorking",
          displayText:"Not Working",
          type:"assetStatus",
          value:false,
          image:'../../../assets/09.png',
        },{
          id:"2",
          name:"serviceRequired",
          displayText:"Service Required",
          type:"assetStatus",
          value:false,
          image:'../../../assets/10.png'
        },
        {
          id:"3",
          name:"working",
          displayText:"Working",
          type:"assetStatus",
          value:false,
          image:'../../../assets/12.png'
        },]
    }
    this.assetTypeFilter = {
      filterDisplayText:  "Asset Type",
      filterArray:[
        {
          id:"1",
          name:"printer",
          displayText:"Printer",
          type:"assetType",
          value:false,
          image:'../../../assets/05.png',
        },{
          id:"2",
          name:"coffeeMaching",
          displayText:"Coffee Machine",
          type:"assetType",
          value:false,
          image:'../../../assets/06.png'
        },
        {
          id:"3",
          name:"robot",
          displayText:"Cleaning Robot",
          type:"assetType",
          value:false,
          image:'../../../assets/12.png'
        },
      ]}
      this.assetLocationFilter = {
      filterDisplayText:  "Location",
      filterArray:[
        {
          id:"1",
          name:"location",
          displayText:"Location",
          type:"location",
          value:false,
          image:'../../../assets/05.png',
        }
      ]}
    this.filterTypes.push(this.contractFilter,this.assetStatusFilter,this.assetTypeFilter )
  }
  contractFilter:filterGroup;
  assetTypeFilter:filterGroup;
  assetStatusFilter:filterGroup;
  assetLocationFilter:filterGroup;
  getFilters(){/*
    this.filterTypes=[]
    this.contractFilter = {
      filterDisplayText:"Contract",
      filterArray:[
      {
        id:"1",
        name:"inContract",
        displayText:"In Contract",
        type:"contract",
        value:false,
        image:'../../../assets/13.png',
      },
      {
        id:"2",
        name:"expired",
        displayText:"Expired",
        type:"contract",
        value:false,
        image:'../../../assets/14.png'
      },
      {
        id:"3",
        name:"expiringSoon",
        displayText:"Expiring Soon",
        type:"contract",
        value:false,
        image:'../../../assets/15.png'
      },
    ]
    }
    this.assetStatusFilter = {
        filterDisplayText:"assetStatus",
        filterArray:[
        {
          id:"1",
          name:"notWorking",
          displayText:"Not Working",
          type:"assetStatus",
          value:false,
          image:'../../../assets/09.png',
        },{
          id:"2",
          name:"serviceRequired",
          displayText:"Service Required",
          type:"assetStatus",
          value:false,
          image:'../../../assets/10.png'
        },
        {
          id:"3",
          name:"working",
          displayText:"Working",
          type:"assetStatus",
          value:false,
          image:'../../../assets/12.png'
        },]
  }
    this.assetTypeFilter = {
        filterDisplayText:  "Asset Type",
      filterArray:[
      {
        id:"1",
        name:"printer",
        displayText:"Printer",
        type:"assetType",
        value:false,
        image:'../../../assets/05.png',
      },{
        id:"2",
        name:"coffeeMaching",
        displayText:"Coffee Machine",
        type:"assetType",
        value:false,
        image:'../../../assets/06.png'
      },
      {
        id:"3",
        name:"robot",
        displayText:"Cleaning Robot",
        type:"assetType",
        value:false,
        image:'../../../assets/12.png'
      },
    ]}
    this.filterTypes.push(this.contractFilter,this.assetStatusFilter,this.assetTypeFilter )*/
    return this.filterTypes;
  }
  getAds() {
    return [
      /*new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
      new AdItem(TechnologyComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),*/
      /*new AdItem(TechnologyComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),*/

      new AdItem(MapComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
      new AdItem(ClusterComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
/*      new AdItem(ArticleComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),*/
      new AdItem(TableWrapperComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
      /*
      new AdItem(MyPostBannerComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
        */
    ];
  }
  selectFilter(filterSelect: filter,filterDisplayText:string) {
    debugger
    console.log('this.filterService.filterTypes  ',this.filterTypes )
    this.filterTypes =
      this.filterTypes.map((filterGrp: filterGroup) => (
        (filterGrp.filterDisplayText === filterDisplayText)
          ?
          {
            ...filterGrp,
            filterArray: filterGrp.filterArray.map((filterItr: filter) => (
              (filterItr === filterSelect)
                ?{...filterItr, value: !filterItr.value}
                :{ ...filterItr,value:false}))
          }
          :
          filterGrp
      ))
    debugger
    console.log('this.filterTypes ',this.filterTypes)

    this.filterChange.next(this.filterTypes);
  }
}
