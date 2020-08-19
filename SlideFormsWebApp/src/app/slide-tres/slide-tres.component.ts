import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-tres',
  templateUrl: './slide-tres.component.html',
  styleUrls: ['./slide-tres.component.scss']
})
export class SlideTresComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  public volver():void {
  	this.router.navigateByUrl("/dos");
  }

}
