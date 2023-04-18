import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarMenuComponent } from './bar-menu/bar-menu.component';



@NgModule({
  declarations: [
    BarMenuComponent
  ],
  exports: [
    BarMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
