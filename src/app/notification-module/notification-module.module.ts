import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { NotifPopUpwrapperComponent } from './notif-pop-upwrapper/notif-pop-upwrapper.component';
import { RealNotifComponent } from './real-notif/real-notif.component';
import { DedicatedNotificationComponent } from './dedicated-notification/dedicated-notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NotificationSettingComponent, NotifPopUpwrapperComponent, RealNotifComponent, DedicatedNotificationComponent],
  declarations: [NotificationSettingComponent, NotifPopUpwrapperComponent, RealNotifComponent, DedicatedNotificationComponent]
})
export class NotificationModuleModule { }
