import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { NotificationModuleModule } from '../notification-module/notification-module.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationModuleModule
  ],
  exports: [DashboardSettingComponent,DashboardChartsComponent],
  declarations: [DashboardSettingComponent,DashboardChartsComponent]
})
export class DashboardModuleModule { }
