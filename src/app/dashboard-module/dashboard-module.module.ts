import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DashboardSettingComponent,DashboardChartsComponent],
  declarations: [DashboardSettingComponent,DashboardChartsComponent]
})
export class DashboardModuleModule { }
