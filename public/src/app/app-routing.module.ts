import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

const routes: Routes = [
	{path: '', redirectTo: 'map', pathMatch: 'full'},
	{path: 'map', pathMatch:'full', component: GoogleMapsComponent, data: { animation: 'map'}},

	{path: '**', redirectTo:'map'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
