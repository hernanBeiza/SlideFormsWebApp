import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import {
  IconDefinition,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-botonera-navegacion',
  templateUrl: './botonera-navegacion.component.html',
  styleUrls: ['./botonera-navegacion.component.scss']
})
export class BotoneraNavegacionComponent implements OnInit {

  @Input()activarAnterior:boolean = false;
  @Input()activarSiguiente:boolean = false;
  @Input()mostrarVolver:boolean =false;
  @Input()mostrarSiguiente:boolean = false;

  private rutas:Array<string> = new Array<string>("uno","dos","tres");
  public faArrowLeft:IconDefinition = faArrowLeft;
  public faArrowRight:IconDefinition = faArrowRight;

  constructor(private router:Router) { }

  ngOnInit() { 
    console.log(this.router.url);
  }

  public volver():void {
    let anterior = this.obtenerAnterior();
    this.router.navigateByUrl(anterior);
  }

  public siguiente():void {
    let siguiente = this.obtenerSiguiente();
    this.router.navigateByUrl(siguiente);
  }

  private obtenerAnterior():string {
    let urlPartes = this.router.url.split("/");
    //TODO
    //Revisar si las url serán con /, slash, o no
    let indice = this.rutas.findIndex(url=>url==urlPartes[urlPartes.length-1]);
    console.log(indice);
    if(indice>0){
      let indiceAnterior = indice-1;
      let rutaAnterior = this.rutas[indiceAnterior];
      console.log(rutaAnterior);
      return rutaAnterior;
    }
    return "";
  }

  private obtenerSiguiente():string {
    let urlPartes = this.router.url.split("/");
    //TODO
    //Revisar si las url serán con /, slash, o no
    let indice = this.rutas.findIndex(url=>url==urlPartes[urlPartes.length-1]);
    console.log(indice);
    if(indice<urlPartes.length){
      let indiceSiguiente = indice+1;
      let rutaSiguiente = this.rutas[indiceSiguiente];
      console.log(rutaSiguiente);
      return rutaSiguiente;
    }
    return "";
  }

}