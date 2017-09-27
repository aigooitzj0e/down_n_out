import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleService } from './google.service';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxAh9XAJJr_qDteIBpJt50ODd1Ojw0qIo'
    })
  ],
  providers: [GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
