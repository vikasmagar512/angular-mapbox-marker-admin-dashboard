
import { environment } from '../../environments/environment';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';
import {Injectable} from '@angular/core';

@Injectable()
export class MapService {

  // constructor(private db: AngularFireDatabase) {
  constructor() {
    // mapboxgl.accessToken = environment.mapbox.accessToken
  }

  // getMarkers(): FirebaseListObservable<any> {
  //   return this.db.list('/markers')
  // }
  //
  // createMarker(data: GeoJson) {
  //   return this.db.list('/markers')
  //     .push(data)
  // }
  //
  // removeMarker($key: string) {
  //   return this.db.object('/markers/' + $key).remove()
  // }

}
