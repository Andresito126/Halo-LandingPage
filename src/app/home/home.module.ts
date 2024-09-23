import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePComponent } from './home-p/home-p.component';
import { AboutGameComponent } from './about-game/about-game.component';
import { GameCoverComponent } from './game-cover/game-cover.component';




@NgModule({
  declarations: [
    HomePComponent,
    AboutGameComponent,
    GameCoverComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class HomeModule { }
