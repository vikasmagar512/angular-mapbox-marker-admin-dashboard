import {Component, Input, OnInit} from '@angular/core';
import {Map} from 'mapbox-gl'
import {AdService} from '../../ad.service';
import {Http} from '@angular/http';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  @Input() data;
  earthquakes;
  searchBox:string;
  ngOnInit(): void {
    console.log(this.data)
    // this.searchBox = this.data.location;
    this.data.location.subscribe(message => this.searchBox = message)
    // https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
  }

  map: Map; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)
  constructor(private http:Http) {
    this.http.get('./assets/earthquakes.geo.json')
      .subscribe(res => {
        this.earthquakes = res.json()
      });
    // this.earthquakes = await import('./earthquakes.geo.json');
  }
}
