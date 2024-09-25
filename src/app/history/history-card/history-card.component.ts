import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {

  @Input() texto1: string="";
  @Input() imgUrl1: string="";
  @Input() texto2: string="";
  @Input() imgUrl2: string="";
}
