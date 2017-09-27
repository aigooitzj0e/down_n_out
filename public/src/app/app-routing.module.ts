import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

const routes: Routes = [
	{path: '', redirectTo: 'front', pathMatch: 'full'},
	{path: 'front', pathMatch:'full', component: FrontpageComponent},
	{path: 'map', pathMatch:'full', component: GoogleMapsComponent},

	{path: '**', redirectTo:'front'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
