import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-cover',
  templateUrl: './game-cover.component.html',
  styleUrl: './game-cover.component.css'
})
export class GameCoverComponent {

  //estos seran los datos que se andaran reemplazando entre si, con ayuda del input 
  @Input ()imgUrl: string= "";
  @Input ()titleCover: string="";
  @Input ()textCover: string="";
}
