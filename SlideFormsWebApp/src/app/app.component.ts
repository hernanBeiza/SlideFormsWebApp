import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routeTransitionAnimations ]
})
export class AppComponent implements OnInit {

  //https://medium.com/ngconf/animating-angular-route-transitions-ef02b871cc30
  //https://angular.io/guide/route-animations
  //@ViewChild(RouterOutlet,null) router:RouterOutlet;

  ngOnInit() { }

  public prepareRoute(outlet: RouterOutlet):boolean {
    return outlet &&  outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

}