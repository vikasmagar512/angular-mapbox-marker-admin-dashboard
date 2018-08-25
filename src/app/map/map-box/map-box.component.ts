
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';
import { GeoJson, FeatureCollection } from '../map';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css'],
})
export class MapBoxComponent implements OnInit{

  /// default settings
  map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  // message = 'Hello World!';


  // data
  source: any;
  markers: any;
  stores;

  constructor(private mapService: MapService) {
    // mapboxgl['accessToken'] = 'pk.eyJ1IjoidmlrYXNtYWdhciIsImEiOiJjamczbGl1bXUxdDB3MndvNmV3NGZtN2ltIn0.iYOKmUXqreHAmf1v5HiYeQ';
    // This will let you use the .remove() function later on
    // if (!('remove' in Element.prototype)) {
    //   Element.prototype.remove = function() {
    //     if (this.parentNode) {
    //       this.parentNode.removeChild(this);
    //     }
    //   };
    // }
    // Add an event listener for the links in the sidebar listing

  }

  ngOnInit() {
    // this.markers = this.mapService.getMarkers()
    mapboxgl.accessToken = 'pk.eyJ1IjoidmlrYXNtYWdhciIsImEiOiJjamczbGl1bXUxdDB3MndvNmV3NGZtN2ltIn0.iYOKmUXqreHAmf1v5HiYeQ';

    this.initializeMap()
  }

  private initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        /*this.map.flyTo({
          center: [this.lng, this.lat]
        })*/
      });
    }
    this.buildMap()
  }

  buildMap() {
    // mapboxgl.accessToken = environment.mapbox.accessToken;
    // this.map = new mapboxgl.Map({
    //   container: 'map',
    //   style: this.style,
    //   zoom: 13,
    //   center: [this.lng, this.lat]
    // });

    // This adds the map to your page
    this.map = new mapboxgl.Map({
      // container id specified in the HTML
      container: 'map',
      // style URL
      style: 'mapbox://styles/mapbox/light-v9',
      // initial position in [lon, lat] format
      center: [-77.034084, 38.909671],
      // initial zoom
      zoom: 14
    });
    this.stores =
    {
      "type": "FeatureCollection",
      "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.034084142948,
            38.909671288923
          ]
        },
        "properties": {
          "phoneFormatted": "(202) 234-7336",
          "phone": "2022347336",
          "address": "1471 P St NW",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "at 15th St NW",
          "postalCode": "20005",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.049766,
            38.900772
          ]
        },
        "properties": {
          "phoneFormatted": "(202) 507-8357",
          "phone": "2025078357",
          "address": "2221 I St NW",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "at 22nd St NW",
          "postalCode": "20037",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.043929,
            38.910525
          ]
        },
        "properties": {
          "phoneFormatted": "(202) 387-9338",
          "phone": "2023879338",
          "address": "1512 Connecticut Ave NW",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "at Dupont Circle",
          "postalCode": "20036",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.0672,
            38.90516896
          ]
        },
        "properties": {
          "phoneFormatted": "(202) 337-9338",
          "phone": "2023379338",
          "address": "3333 M St NW",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "at 34th St NW",
          "postalCode": "20007",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.002583742142,
            38.887041080933
          ]
        },
        "properties": {
          "phoneFormatted": "(202) 547-9338",
          "phone": "2025479338",
          "address": "221 Pennsylvania Ave SE",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "20003",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -76.933492720127,
            38.99225245786
          ]
        },
        "properties": {
          "address": "8204 Baltimore Ave",
          "city": "College Park",
          "country": "United States",
          "postalCode": "20740",
          "state": "MD"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.097083330154,
            38.980979
          ]
        },
        "properties": {
          "phoneFormatted": "(301) 654-7336",
          "phone": "3016547336",
          "address": "4831 Bethesda Ave",
          "cc": "US",
          "city": "Bethesda",
          "country": "United States",
          "postalCode": "20814",
          "state": "MD"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.359425054188,
            38.958058116661
          ]
        },
        "properties": {
          "phoneFormatted": "(571) 203-0082",
          "phone": "5712030082",
          "address": "11935 Democracy Dr",
          "city": "Reston",
          "country": "United States",
          "crossStreet": "btw Explorer & Library",
          "postalCode": "20190",
          "state": "VA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.10853099823,
            38.880100922392
          ]
        },
        "properties": {
          "phoneFormatted": "(703) 522-2016",
          "phone": "7035222016",
          "address": "4075 Wilson Blvd",
          "city": "Arlington",
          "country": "United States",
          "crossStreet": "at N Randolph St.",
          "postalCode": "22203",
          "state": "VA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -75.28784,
            40.008008
          ]
        },
        "properties": {
          "phoneFormatted": "(610) 642-9400",
          "phone": "6106429400",
          "address": "68 Coulter Ave",
          "city": "Ardmore",
          "country": "United States",
          "postalCode": "19003",
          "state": "PA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -75.20121216774,
            39.954030175164
          ]
        },
        "properties": {
          "phoneFormatted": "(215) 386-1365",
          "phone": "2153861365",
          "address": "3925 Walnut St",
          "city": "Philadelphia",
          "country": "United States",
          "postalCode": "19104",
          "state": "PA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.043959498405,
            38.903883387232
          ]
        },
        "properties": {
          "phoneFormatted": "(202) 331-3355",
          "phone": "2023313355",
          "address": "1901 L St. NW",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "at 19th St",
          "postalCode": "20036",
          "state": "D.C."
        }
      }
    ]
    }

    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    //// Add Marker on Click
    // this.map.on('click', (event) => {
    //   const coordinates = [event.lngLat.lng, event.lngLat.lat]
    //   const newMarker   = new GeoJson(coordinates, { message: this.message })
    //   this.mapService.createMarker(newMarker)
    // })


    /// Add realtime firebase data on map load
   /* this.map.on('load', (event) => {

      /!*this.map.addLayer({
        id: 'terrain-data',
        type: 'line',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2'
        },
        'source-layer': 'contour'
      });*!/
     /!* this.map.addLayer({
        id: 'rpd_parks',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.3o7ubwm8'
        },
        'source-layer': 'RPD_Parks'
      });*!/
      this.map.addLayer({
        id: 'rpd_parks',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.3o7ubwm8'
        },
        'source-layer': 'RPD_Parks',
        layout: {
          visibility: 'visible'
        },
        paint: {
          'fill-color': 'rgba(61,153,80,0.55)'
        }
      });
      /!*!/// register source
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      /// get source
      this.source = this.map.getSource('firebase')

      /// subscribe to realtime database and set data source
      this.markers.subscribe(markers => {
        let data = new FeatureCollection(markers)
        this.source.setData(data)
      })

      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      })
*!/

    })
*/
   let that = this
    this.map.on('load', function(e) {
      // Add the data to your map as a layer
      /*that.map.addLayer({
        id: 'locations',
        type: 'symbol',
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: 'geojson',
          data: that.stores
        },
        layout: {
          'icon-image': 'restaurant-15',
          'icon-allow-overlap': true,
        }
      });*/
      that.map.addSource('places', {
        type: 'geojson',
        data: that.stores
      });
      that.stores.features.map((marker,i) =>{

      // that.stores.features.forEach(function(marker) {
        // Create a div element for the marker
        var el = document.createElement('div');
        // Add a class called 'marker' to each div
        el.className = 'marker';
        // By default the image for your custom marker will be anchored
        // by its center. Adjust the position accordingly
        // Create the custom markers, set their position, and add to map
        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(that.map);

        el.addEventListener('click', function(e) {
          var activeItem = document.getElementsByClassName('active');
          // 1. Fly to the point
          that.flyToStore(marker);
          // 2. Close all other popups and display popup for clicked store
          that.createPopUp(marker);
          // 3. Highlight listing in sidebar (and remove highlight for all other listings)
          e.stopPropagation();
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          var listing = document.getElementById('listing-' + i);
          console.log(listing);
          listing.classList.add('active');
        });
      // });
      //
      // debugger
      // // that.buildLocationList(this.stores);
      //
      // debugger
      // // Iterate through the list of stores
      // that.stores.features.map((item,i) =>{
        debugger
        var currentFeature = marker;
        // Shorten data.feature.properties to just `prop` so we're not
        // writing this long form over and over again.
        var prop = currentFeature.properties;
        // Select the listing container in the HTML and append a div
        // with the class 'item' for each store
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = 'listing-' + i;

        // Create a new link with the class 'title' for each store
        // and fill it with the store address
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link['dataPosition'] = i;
        link.innerHTML = prop.address;

        // Create a new div with the class 'details' for each store
        // and fill it with the city and phone number
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.city;
        if (prop.phone) {
          details.innerHTML += ' &middot; ' + prop.phoneFormatted;
        }
/*
        link.addEventListener('click', function(e) {
          // Update the currentFeature to the store associated with the clicked link
          var clickedListing = that.stores.features[this['dataPosition']];
          // 1. Fly to the point associated with the clicked link
          that.flyToStore(clickedListing);
          // 2. Close all other popups and display popup for clicked store
          that.createPopUp(clickedListing);
          // 3. Highlight listing in sidebar (and remove highlight for all other listings)
          var activeItem = document.getElementsByClassName('active');
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          this.parentNode.classList.add('active');
        });*/
      })
    });
    // Add an event listener for when a user clicks on the map
    this.map.on('click', function(e) {
      // Query all the rendered points in the view
      var features = that.map.queryRenderedFeatures(e.point, { layers: ['locations'] });
      if (features.length) {
        var clickedPoint = features[0];
        // 1. Fly to the point
        that.flyToStore(clickedPoint);
        // 2. Close all other popups and display popup for clicked store
        that.createPopUp(clickedPoint);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
        var selectedFeature = clickedPoint.properties.address;
        let selectedFeatureIndex;
        for (var i = 0; i < that.stores.features.length; i++) {
          if (that.stores.features[i].properties.address === selectedFeature) {
            selectedFeatureIndex = i;
          }
        }
        // Select the correct list item using the found index and add the active class
        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');
      }
    });
  }
  flyToStore(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Sweetgreen</h3>' +
        '<h4>' + currentFeature.properties.address + '</h4>')
      .addTo(this.map);
  }
  buildLocationList(data) {
    debugger
    // Iterate through the list of stores
    data.features.map((item,i) =>{
      debugger
      var currentFeature = item;
      // Shorten data.feature.properties to just `prop` so we're not
      // writing this long form over and over again.
      var prop = currentFeature.properties;
      // Select the listing container in the HTML and append a div
      // with the class 'item' for each store
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = 'listing-' + i;

      // Create a new link with the class 'title' for each store
      // and fill it with the store address
      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link['dataPosition'] = i;
      link.innerHTML = prop.address;

      // Create a new div with the class 'details' for each store
      // and fill it with the city and phone number
      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.city;
      if (prop.phone) {
        details.innerHTML += ' &middot; ' + prop.phoneFormatted;
      }
    })
  }

  /// Helpers

  // removeMarker(marker) {
  //   this.mapService.removeMarker(marker.$key)
  // }
  //

  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    })
  }
}
