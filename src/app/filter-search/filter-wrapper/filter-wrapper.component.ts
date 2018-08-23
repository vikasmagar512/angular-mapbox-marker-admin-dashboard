import { Component, OnInit } from '@angular/core';
import {filter} from '../filter';
import {AdService} from '../../ad.service';
import {Subject, Subscription} from 'rxjs/index';
import {filterGroup} from '../filterGroup';

@Component({
  selector: 'app-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.css']
})
export class FilterWrapperComponent implements OnInit {
  filterTypes:Array<filterGroup>;
  subscription: Subscription;

  constructor(private filterService : AdService) {
    // this.filterTypes = this.filterService.getFilters();
    // this.filterTypes = filterService.filterTypes;
    this.subscription = filterService.filterChange.subscribe((value:Array<filterGroup>) => {
      // alert('wer')
      this.filterTypes = value;
    });

  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    // this.filterTypes=this.filterService.getFilters();
  }
}
