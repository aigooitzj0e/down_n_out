import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxAh9XAJJr_qDteIBpJt50ODd1Ojw0qIo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
