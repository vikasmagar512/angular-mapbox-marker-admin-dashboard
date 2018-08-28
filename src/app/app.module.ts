import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule,HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { RouterModule, Routes } from '@angular/router';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { TableWrapperComponent } from './financial-tables/tableWrapper/table-wrapper.component';
import { BottomComponent } from './bottom/bottom.component';
import { TopComponent } from './top/top.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from './not-found/not-found.component';

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

import { dataService } from './dataService.service';
import {NotificationService} from './notification.service';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { CanActivateRoutesGuard } from './can-activate-routes.guard';
import { CustomHttpService } from './custom-http-service.service';
import { SessionService } from './session.service';
import { DashboardChartsComponent } from './dashboard-module/dashboard-charts/dashboard-charts.component';
import { CustomerBottomComponent } from './customer-bottom/customer-bottom.component';
import { GdprComponent } from './gdpr/gdpr.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  { path: 'main',
    canActivate: [
      CanActivateRoutesGuard
    ],
    component: MainComponent,
    children:[
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home',  component:HomeComponent,
        children: [
          // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          // {path: 'dashboard', component: DashboardComponent, data: { activeComponent: '0'}},
          // {path: 'details', component: DetailsComponent, data: { activeComponent: '1'}},
          /*{path: 'details', component: DetailsComponent, pathMatch: 'full',
            children:[
              {path: '', redirectTo: 'details', pathMatch: 'full'},
              {path: 'asset/:id', component: AssetComponent},
              {path: 'agreementNo/:id', component: AgreementComponent},
            ]
          },*/
      //     {path: 'asset/:id', component: AssetComponent},
      //     {path: 'agreementNo/:id', component: AgreementComponent},
      //   ]
      // },
      // { path: 'asset/:id',  component:AssetComponent},
      // { path: 'agreementNo/:id',  component:AgreementComponent},
      // { path: 'notifications/all',  component:DedicatedNotificationComponent},
        // { path: 'store',  component:StoreComponent }
    ]
  },
  { path:'**', component: PageNotFoundComponent}
]}]

 @NgModule({
  imports: [BrowserModule, PostModule, MapModule, DataTablesModule, FinancialTablesModule,
    FilterSearchModule,
    TableModuleModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    DashboardModuleModule,
    NotificationModuleModule,
    CapacityModuleModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    // AdService,
    CustomHttpService,
    ApiService,
    AuthService,
    SessionService,
    CanActivateRoutesGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpService,
      multi: true,
    }],
  // providers: [AdService, dataService],
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    SignInComponent,
    PageNotFoundComponent,
    AdDirective,
    BottomComponent,
    TopComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    PageNotFoundComponent,
    CustomerBottomComponent,
    GdprComponent,
    // DashboardChartsComponent
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent, TableWrapperComponent,DashboardChartsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() { }
}

