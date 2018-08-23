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

    // var listings = document.getElementById('listings');
    // var locations = L.mapbox.featureLayer().addTo(map);

    // locations.loadURL('https://s3-us-west-2.amazonaws.com/s.cdpn.io/6362/sweetgreen.geojson'); // load in your own GeoJSON file here

    // function setActive(el) {
    //   var siblings = listings.getElementsByTagName('div');
    //   for (var i = 0; i < siblings.length; i++) {
    //     siblings[i].className = siblings[i].className
    //       .replace(/active/, '').replace(/\s\s*$/, '');
    //   }

    //   el.className += ' active';
    // }

    // locations.on('ready', function() {
    //   locations.eachLayer(function(locale) {

    //     // Shorten locale.feature.properties to just `prop` so we're not
    //     // writing this long form over and over again.
    //     var prop = locale.feature.properties;

    //     // Each marker on the map.
    //     var popup = '<h3>Sweetgreen</h3><div>' + prop.address;

    //     var listing = listings.appendChild(document.createElement('div'));
    //     listing.className = 'item';

    //     var link = listing.appendChild(document.createElement('a'));
    //     link.href = '#';
    //     link.className = 'title';

    //     link.innerHTML = prop.address;
    //     if (prop.crossStreet) {
    //       link.innerHTML += '<br /><small class="quiet">' + prop.crossStreet + '</small>';
    //       popup += '<br /><small class="quiet">' + prop.crossStreet + '</small>';
    //     }

    //     var details = listing.appendChild(document.createElement('div'));
    //     details.innerHTML = prop.city;
    //     if (prop.phone) {
    //       details.innerHTML += ' &middot; ' + prop.phoneFormatted;
    //     }

    //     link.onclick = function() {
    //       setActive(listing);

    //       // When a menu item is clicked, animate the map to center
    //       // its associated locale and open its popup.
    //       map.setView(locale.getLatLng(), 16);
    //       locale.openPopup();
    //       return false;
    //     };

    //     // Marker interaction
    //     locale.on('click', function(e) {
    //       // 1. center the map on the selected marker.
    //       map.panTo(locale.getLatLng());

    //       // 2. Set active the markers associated listing.
    //       setActive(listing);
    //     });

    //     popup += '</div>';
    //     locale.bindPopup(popup);
    //   });
    // });

    // locations.on('layeradd', function(e) {
    //   var marker = e.layer;
    //   marker.setIcon(L.icon({
    //     iconUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6362/marker.png', // load your own custom marker image here
    //     iconSize: [56, 56],
    //     iconAnchor: [28, 28],
    //     popupAnchor: [0, -34]
    //   }));
    // });
  }

}
