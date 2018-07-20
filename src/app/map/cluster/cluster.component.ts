import { Component, OnInit } from '@angular/core';
import { Supercluster} from 'Supercluster';
import { LngLatLike} from 'mapbox-gls';

import {Http} from '@angular/http';
import {Map} from "mapbox-gl";
import {Cluster} from 'cluster';
// import earthquakes from './earthquakes.geo.json';
/*
@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})

export class ClusterComponent implements OnInit {
  earthquakes: object;

  async ngOnInit() {
    this.earthquakes = await import('./earthquakes.geo.json');
  }

}
*/

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  earthquakes: object;
  supercluster: Supercluster;
  selectedCluster: {
    lngLat: LngLatLike;
    count: number;
    id: number;
  };
  constructor(private http:Http){
    this.http.get('./assets/earthquakes.geo.json')
    .subscribe(res => this.earthquakes = res.json());
  }
  // map: Map; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)

  async ngOnInit() {
  //   this.earthquakes = await import('./earthquakes.geo.json');
  }

  selectCluster(event: MouseEvent, feature: Cluster) {
    event.stopPropagation(); // This is needed, otherwise the popup will close immediately
    this.selectedCluster = {
      // Change the ref, to trigger mgl-popup onChanges (when the user click on the same cluster)
      lngLat: [ ...feature.geometry!.coordinates ],
      count: feature.properties.point_count!,
      id: feature.properties.cluster_id!
    };
  }
  // async ngOnInit() {
    // this.earthquakes = await import('./earthquakes.geo.json');
    // import("./earthquakes.geo.json").then(widget => {
    //   this.earthquakes = widget
    // });

    // this.earthquakes = await import('./earthquakes.geo.json');
    // import("./earthquakes.geojson").then(function (widget) {
    //   this.earthquakes = widget;
    // });
  // }
}
