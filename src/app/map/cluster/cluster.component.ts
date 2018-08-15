import { Component, OnInit } from '@angular/core';
import { Cluster,Supercluster} from 'Supercluster';
import { LngLatLike} from 'mapbox-gl';

import {Http} from '@angular/http';
import {Map} from "mapbox-gl";
// import {Cluster} from 'Supercluster';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// import {Cluster} from 'cluster';
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
  earthquakes;
  supercluster: Supercluster;
  selectedCluster: {
    lngLat: LngLatLike;
    count: number;
    id: number;
  };
  constructor(private http:Http){

  }
  map: Map; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)

  async ngOnInit() {
    this.http.get('./assets/earthquakes.geo.json')
      .subscribe(res => {
        this.earthquakes = res.json()
      });
    // this.earthquakes = await import('./earthquakes.geo.json');
  }
/*
  selectCluster(event: MouseEvent, feature: Cluster) {
    event.stopPropagation(); // This is needed, otherwise the popup will close immediately
    this.selectedCluster = {
      // Change the ref, to trigger mgl-popup onChanges (when the user click on the same cluster)
      lngLat: [ ...feature.geometry!.coordinates ],
      count: feature.properties.point_count!,
      id: feature.properties.cluster_id!
    };
  }*/
  // $('#searchByName').keyup(cityMapSearch);
  /*
  cityMapSearch() {
    var searchString = this.values.toLowerCase();
    // myLayer.setFilter(showCity);
  }
  showCity(feature) {

    if (feature.properties.cityName == searchString) {
      map.setView([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 17);
    } else {
      return feature.properties.cityName
        .toLowerCase()
        .indexOf(searchString) !== -1;
    }
    return true;
  }*/
}
