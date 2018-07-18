import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableWrapperComponent } from './tableWrapper/table-wrapper.component';
import { TableCompComponent } from './table-comp/table-comp.component';

import { DataTablesModule } from 'angular-datatables';
import {TableModuleModule} from '../table-module/table-module.module';
@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    TableModuleModule
  ],
  declarations: [TableWrapperComponent, TableCompComponent],
  exports:[TableWrapperComponent],
  entryComponents:[TableWrapperComponent]
})
export class FinancialTablesModule { }
