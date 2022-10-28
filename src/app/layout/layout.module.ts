import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllmaterialModule } from '../shared/allmaterial/allmaterial.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    AllmaterialModule,
    RouterModule 
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutModule { }
