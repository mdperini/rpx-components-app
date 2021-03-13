import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  { RpxComponentsUiModule } from '../../projects/rpx-components-ui/src/public-api'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RpxComponentsUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
