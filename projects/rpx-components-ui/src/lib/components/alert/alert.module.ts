import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpxAlertComponent } from './alert.component';



@NgModule({
  declarations: [RpxAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RpxAlertComponent  
  ]
})
export class RpxAlertModule { }
