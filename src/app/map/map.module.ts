import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { ClusterComponent } from './cluster/cluster.component';
import {HttpModule} from '@angular/http';
import {TableModuleModule} from '../table-module/table-module.module';
import {AdService} from '../ad.service';
import { MapBoxComponent } from './map-box/map-box.component';
import {MapService} from './map.service';
import {environment} from '../../environments/environment';
import { MapBoxSideBarComponent } from './map-box-side-bar/map-box-side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    TableModuleModule,
    HttpModule,
    NgxMapboxGLModule.forRoot({
      accessToken: 'pk.eyJ1IjoidmlrYXNtYWdhciIsImEiOiJjamczbGl1bXUxdDB3MndvNmV3NGZtN2ltIn0.iYOKmUXqreHAmf1v5HiYeQ', // Can also be set per map (accessToken input of mgl-map)
      // accessToken:environment['mapbox']['accessToken']
      // geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  declarations: [MapComponent, ClusterComponent, MapBoxComponent, MapBoxSideBarComponent],
  entryComponents:[MapComponent,ClusterComponent],
  exports:[MapComponent,ClusterComponent,MapBoxComponent],
  providers:[MapService]

})
export class MapModule { }
