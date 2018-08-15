import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapacitySettingComponent } from './capacity-setting/capacity-setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CapacitySettingComponent],
  declarations: [CapacitySettingComponent]
})
export class CapacityModuleModule { }
