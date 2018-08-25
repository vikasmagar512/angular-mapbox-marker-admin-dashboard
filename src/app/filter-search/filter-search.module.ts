import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterWrapperComponent } from './filter-wrapper/filter-wrapper.component';
import { FilterComponent } from './filter/filter.component';
import {  FormsModule } from '@angular/forms';

import{BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
// import { Ng2SimpleAutocomplete } from 'ng2-simple-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [SearchComponent, FilterWrapperComponent, FilterComponent],
  exports: [SearchComponent,FilterWrapperComponent],
  providers:[]
})
export class FilterSearchModule { }
