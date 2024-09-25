import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPComponent } from './history-p/history-p.component';
import { HomeModule } from '../home/home.module';
import { HistoryCardComponent } from './history-card/history-card.component';





@NgModule({
  declarations: [
    HistoryPComponent,
    HistoryCardComponent,
    
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class HistoryModule { }
