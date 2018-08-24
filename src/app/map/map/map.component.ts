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
  // @Input() data;
  earthquakes;
  searchBox:string;

  map: Map; // Mapbox GL Map object (Mapbox is ran outside angular zone, keep that in mind when binding events from this object)
  geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "message": "Foo",
          "iconSize": [60, 60]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -66.324462890625,
            -16.024695711685304
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "message": "Bar",
          "iconSize": [50, 50]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -61.2158203125,
            -15.97189158092897
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "message": "Baz",
          "iconSize": [40, 40]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -63.29223632812499,
            -18.28151823530889
          ]
        }
      }
    ]
  };
  constructor(private http:Http,private adService:AdService) {
    this.http.get('./assets/earthquakes.geo.json')
      .subscribe(res => {
        this.earthquakes = res.json()
      });
    // this.earthquakes = await import('./earthquakes.geo.json');
  }
  ngOnInit(): void {
    // console.log(this.data)
    // this.searchBox = this.data.location;
    // this.data.location.subscribe(message => this.searchBox = message)
    this.searchBox= 'malegaon'
    this.adService.messageSource.subscribe(message => this.searchBox = message)

    // add markers to map
    this.geojson.features.forEach(function(marker) {
      // create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
      el.style.width = marker.properties.iconSize[0] + 'px';
      el.style.height = marker.properties.iconSize[1] + 'px';

      el.addEventListener('click', function() {
        window.alert(marker.properties.message);
      });

      // add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
    });
  }

}
