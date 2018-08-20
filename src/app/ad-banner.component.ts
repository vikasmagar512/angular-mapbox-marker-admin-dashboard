import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, SimpleChange } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { HeroProfileComponent } from './hero-profile.component';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banneri">
                <!--<h3>Advertisements</h3>-->
                <ng-template ad-host></ng-template>    
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  @Input() activeComponent;
  currentAdIndex;

  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.currentAdIndex = this.activeComponent;
    this.loadComponent();
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    this.currentAdIndex = changes.activeComponent.currentValue
    this.loadComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];






    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }
}
