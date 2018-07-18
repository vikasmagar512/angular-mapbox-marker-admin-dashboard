import { Component, OnInit } from '@angular/core';
import {Map} from 'mapbox-gl'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: Map; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)

  constructor() { }

  ngOnInit() {
  }

}
