import { Component, OnInit } from '@angular/core';
import { GoogleService } from './../google.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  // MAP OPTIONS
  lat:number;
  lng:number;
  zoom: number;
  map:string;
  radius:number = 2000;
  color:string = 'rgb(116, 156, 189)';

  // SEARCH
  newSearch: object = {
    category: "",
    location: ""
  }


  constructor() { }

  ngOnInit() {
    this.getLocation()
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position)=> {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 14;
        console.log("latitude: " + this.lat);
        console.log("longitude: " + this.lng);
    })
  }

  onSearch() {
    console.log('onSearch()', this.newSearch);

  }



}
