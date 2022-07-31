import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnapprovedContractorsPageComponent } from './unapproved-contractors-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UnapprovedContractorsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UnapprovedContractorsPageComponent
  ]
})
export class UnapprovedContractorsPageModule { }
