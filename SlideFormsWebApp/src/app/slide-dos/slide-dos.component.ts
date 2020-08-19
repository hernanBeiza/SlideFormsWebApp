import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  IconDefinition,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-slide-dos',
  templateUrl: './slide-dos.component.html',
  styleUrls: ['./slide-dos.component.scss']
})
export class SlideDosComponent implements OnInit {

  public faArrowLeft:IconDefinition = faArrowLeft;
  public faArrowRight:IconDefinition = faArrowRight;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public volver():void {
  	this.router.navigateByUrl("/uno");
  }

  public siguiente():void {
  	this.router.navigateByUrl("/tres");
  }

}
