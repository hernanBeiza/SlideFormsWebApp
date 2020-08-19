import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideUnoComponent } from './slide-uno/slide-uno.component';
import { SlideDosComponent } from './slide-dos/slide-dos.component';
import { SlideTresComponent } from './slide-tres/slide-tres.component';

const routes: Routes = [
	{ path:"uno", component:SlideUnoComponent, pathMatch:"full", data: { animationState: 'Uno' }  },
	{ path:"dos", component:SlideDosComponent, pathMatch:"full", data: { animationState: 'Dos' }  },
	{ path:"tres", component:SlideTresComponent, pathMatch:"full",data: { animationState: 'Tres' } },
	{ path:"**", redirectTo:"uno" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
