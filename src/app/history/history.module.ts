import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPComponent } from './history-p/history-p.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    HistoryPComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class HistoryModule { }
