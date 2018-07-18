import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {filter} from '../filter';
import {filterGroup} from '../filterGroup';
import {AdService} from '../../ad.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  @Input() filterData: filterGroup;
  info: Object;
  constructor(private filterService: AdService) {
    this.info = filterService.info;
    console.log('here info is ',this.info)
  }
  ngOnInit() {
  }
 /* ngOnChanges(changes : {[propKey:string]: SimpleChange}){
    console.log('changes ',changes)
    this.filterData = changes.filterData.currentValue
  }*/

  selectFilter(filterSelect: filter) {
    console.log('this.filterService.filterTypes  ',this.filterService.filterTypes )
    this.filterService.change()
    this.filterService.selectFilter(filterSelect,this.filterData.filterDisplayText)
  }
}
