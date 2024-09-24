import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input ()imgUrl1: string= "";
  @Input ()imgUrl2: string= "";
  @Input ()imgUrl3: string= "";
  @Input ()imgUrl4: string= "";
  @Input ()imgUrl5: string= "";
  @Input ()imgUrl6: string= "";
}
