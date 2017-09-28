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

  //YELP data
  yelpp = {
    name: "",
    lat: "",
    lng: ""
  }


  constructor(private _routes: Router, private _route: ActivatedRoute, private _googleService: GoogleService) { }


  ngOnInit() {
    this.getLocation();
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
    this._googleService.search(this.newSearch)
    .then((data)=> {
      console.log(data);
      this.yelpp.name = data.name;
      this.yelpp.lat = data.coordinates.latitude;
      this.yelpp.lng = data.coordinates.longitude;
    })
  }
	


}
