import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NotificationSettingComponent],
  declarations: [NotificationSettingComponent]
})
export class NotificationModuleModule { }
