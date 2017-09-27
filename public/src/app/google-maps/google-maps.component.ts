import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  lat:number;
  lng:number;
  zoom: number;

  constructor(private _routes: Router, private _route: ActivatedRoute) { }

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
	

}
