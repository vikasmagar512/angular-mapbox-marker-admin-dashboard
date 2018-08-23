import {filter} from './filter';

export interface filterGroup{
  filterDisplayText:string,
  filterType:string,
  filterArray:Array<filter>
}
