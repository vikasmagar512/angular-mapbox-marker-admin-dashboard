import { Component, OnInit } from '@angular/core';
import { Cluster,Supercluster} from 'Supercluster';
import { LngLatLike} from 'mapbox-gl';

import {Http} from '@angular/http';
import {Map} from "mapbox-gl";
// import {Cluster} from 'Supercluster';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import L from '@mapbox/mapbox-gl';
import {AdService} from '../../ad.service';

import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  earthquakes;
  searchBox:string;

  supercluster: Supercluster;
  selectedCluster: {
    lngLat: LngLatLike;
    count: number;
    id: number;
  };
  constructor(private http:Http,private adService:AdService){

  }
  map: Map; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)

  async ngOnInit() {
    this.http.get('./assets/earthquakes.geo.json')
      .subscribe(res => {
        this.earthquakes = res.json()
      });
    // this.earthquakes = await import('./earthquakes.geo.json');

    this.searchBox= 'malegaon'
    this.adService.messageSource.subscribe(message => this.searchBox = message)

  }
}
