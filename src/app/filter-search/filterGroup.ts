import {filter} from './filter';

export interface filterGroup{
  filterDisplayText:string,
  filterType:string,
  filterId:string,
  enabled:boolean,
  filterArray:Array<filter>
}
