import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePComponent } from './home-p/home-p.component';
import { AboutGameComponent } from './about-game/about-game.component';



@NgModule({
  declarations: [
   
  
    HomePComponent,
    AboutGameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
