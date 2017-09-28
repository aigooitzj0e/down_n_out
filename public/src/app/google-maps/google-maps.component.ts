import { Component, OnInit } from '@angular/core';
import { GoogleService } from './../google.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    location: "",
  }

  //YELP DATA
  yList:object[] = [];


  constructor(private _routes: Router, private _route: ActivatedRoute, private _googleService: GoogleService) { }


  ngOnInit() {
    this.getLocation();
  }

  //GEOLOCATION
  getLocation() {
  		navigator.geolocation.getCurrentPosition((position)=> {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 14;
        console.log("latitude: " + this.lat);
        console.log("longitude: " + this.lng);
    })
  }

  //YELP SEARCH
  onSearch() {
    console.log('onSearch()', this.newSearch);
    this._googleService.search(this.newSearch)
    .then((data)=> {
      console.log(data);
      var newMarker = [];
      for(var i = 0; i < data.jsonBody.businesses.length; i++) {
        this.yList.push(data.jsonBody.businesses[i]);
      }


    })
  }
	


}
