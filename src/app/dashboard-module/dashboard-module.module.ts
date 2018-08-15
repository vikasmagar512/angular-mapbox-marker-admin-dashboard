import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSettingComponent } from './dashboard-setting/dashboard-setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DashboardSettingComponent],
  declarations: [DashboardSettingComponent]
})
export class DashboardModuleModule { }
