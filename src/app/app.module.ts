import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
// import { RouterModule, Routes } from '@angular/router';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { TableWrapperComponent } from './financial-tables/tableWrapper/table-wrapper.component';
import { BottomComponent } from './bottom/bottom.component';
import { TopComponent } from './top/top.component';
import { NavbarComponent } from './navbar/navbar.component';
import { dataService } from './dataService.service';
import {NotificationService} from './notification.service';
import { FinancialTablesModule } from './financial-tables/financial-tables.module';
import{BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';

import { DashboardModuleModule } from './dashboard-module/dashboard-module.module';
import { NotificationModuleModule } from './notification-module/notification-module.module';
import { CapacityModuleModule} from './capacity-module/capacity-module.module';
import { DataTablesModule } from 'angular-datatables';
import { FilterSearchModule } from './filter-search/filter-search.module';
import { TableModuleModule } from './table-module/table-module.module';
import { PostModule } from './post/post.module';
import { MapModule } from './map/map.module';

@NgModule({
  imports: [BrowserModule, PostModule, MapModule, DataTablesModule, FinancialTablesModule,
    FilterSearchModule,
    TableModuleModule,
    DashboardModuleModule,
    NotificationModuleModule,
    CapacityModuleModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot()],

  providers: [AdService, dataService,NotificationService],

  declarations: [AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    BottomComponent,
    TopComponent,
    NavbarComponent,
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent, TableWrapperComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}

