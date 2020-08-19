import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-uno',
  templateUrl: './slide-uno.component.html',
  styleUrls: ['./slide-uno.component.scss']
})
export class SlideUnoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public irSiguiente():void {
  	this.router.navigateByUrl("/dos");
  }
  
}
