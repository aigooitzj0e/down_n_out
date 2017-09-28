import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { trigger,state,style,animate,transition, query} from '@angular/animations';

@Component({
  selector: 'app-root',
	animations: [
		trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            opacity: 0
          }),
          {optional:true}),
        // move page off screen right on leave
        query(':leave',
          animate('6s',
            style({
              position: 'fixed',
              width:'100%',
              opacity: 0
            })
          ),
        {optional:true}),
        // move page in screen from left to right
        query(':enter',
          animate('6s',
            style({
							position: 'fixed',
							width:'100%',
              opacity: 1
            })
          ),
        {optional:true}),
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private location: Location) { }


	getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
