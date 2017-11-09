import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdeOnFPLW0SxZ5vU0kiPnE7-elKNhS4Q0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
