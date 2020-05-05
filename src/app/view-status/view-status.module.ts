import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStatusComponent } from './view-status.component'
import { ViewStatusService } from './view-status.service'

@NgModule({
  declarations: [
  ViewStatusComponent
  ],
  imports: [
    CommonModule
  ]
})
providers: [ViewStatusService],
export class ViewStatusModule { }
