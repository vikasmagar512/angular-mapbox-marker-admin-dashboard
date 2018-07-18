import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';
import {PostModule} from './post/post.module';
import { MapModule } from './map/map.module';
import { FinancialTablesModule } from './financial-tables/financial-tables.module';

  import { DataTablesModule } from 'angular-datatables';
import {TableWrapperComponent} from './financial-tables/tableWrapper/table-wrapper.component';
import { BottomComponent } from './bottom/bottom.component';
import { TopComponent } from './top/top.component';
import {FilterSearchModule} from './filter-search/filter-search.module';
import {dataService} from './dataService.service';
import {TableModuleModule} from './table-module/table-module.module';
@NgModule({
  imports: [ BrowserModule,PostModule, MapModule, DataTablesModule,FinancialTablesModule,
    FilterSearchModule,
    TableModuleModule],
  providers: [AdService,dataService],
  declarations: [ AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    BottomComponent,
    TopComponent,
],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent,TableWrapperComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

