import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';
import { CafeRoutingModule } from './cafe.routing.module';



@NgModule({
  declarations: [
    CafeComponent
  ],
  imports: [
    CommonModule,
    CafeRoutingModule,
  ]
})
export class CafeModule { }
