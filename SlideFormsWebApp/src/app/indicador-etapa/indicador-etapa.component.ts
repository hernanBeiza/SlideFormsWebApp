import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

interface EtapaItem {
	id:number,
	ruta:string,
	nombre:string,
	actual:boolean
}
@Component({
  selector: 'app-indicador-etapa',
  templateUrl: './indicador-etapa.component.html',
  styleUrls: ['./indicador-etapa.component.scss']
})
export class IndicadorEtapaComponent implements OnInit {

	private etapas:Array<EtapaItem> = new Array<EtapaItem>(
		{id:1,ruta:"/uno",nombre:"Filiación",actual:true},
		{id:2,ruta:"/dos",nombre:"Delitos",actual:false},
		{id:3,ruta:"/tres",nombre:"Pena Corporal",actual:false},
		{id:4,ruta:"/cuatro",nombre:"Pena Sustitutivo",actual:false},
		{id:5,ruta:"/cinco",nombre:"Pena Cunilaria",actual:false},
	);

  constructor(private router:Router) { }

  ngOnInit() { 

		this.router.events.forEach((event) => {

			if(event instanceof NavigationEnd) {
				console.log(this.router.url);
				this.revisarActual();
			}

		});

  
  }

  public revisarActual():void {
  	let etapaActual = this.router.url;

  	this.etapas.forEach(etapa=>{
  		if(etapa.ruta == etapaActual){
	  		etapa.actual = true;
  		} else {
  			etapa.actual = false;
  		}
  	});

  }

}
