import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideUnoComponent } from './slide-uno/slide-uno.component';
import { SlideDosComponent } from './slide-dos/slide-dos.component';
import { SlideTresComponent } from './slide-tres/slide-tres.component';
import { BotoneraNavegacionComponent } from './botonera-navegacion/botonera-navegacion.component';
import { IndicadorEtapaComponent } from './indicador-etapa/indicador-etapa.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideUnoComponent,
    SlideDosComponent,
    SlideTresComponent,
    BotoneraNavegacionComponent,
    IndicadorEtapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
