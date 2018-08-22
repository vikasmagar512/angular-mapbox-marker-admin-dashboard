import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';
import { FilterComponent } from './filter/filter.component';
import{BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    
  ],
  declarations: [SearchComponent, FilterWrapperComponent, FilterComponent],
  exports: [SearchComponent,FilterWrapperComponent],
  providers:[]
})
export class FilterSearchModule { }
