import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './nabvar/nabvar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NabvarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    NabvarComponent
  ]
})
export class CompartidoModule { }
