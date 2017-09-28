import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

	front(){
		this._router.navigate(['map'])
	}
}
