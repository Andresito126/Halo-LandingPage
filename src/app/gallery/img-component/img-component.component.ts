import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-component',
  templateUrl: './img-component.component.html',
  styleUrl: './img-component.component.css'
})
export class ImgComponentComponent {

  @Input ()title1: string= "";
  @Input ()img1: string= "";
  
  @Input ()title2: string= "";
  @Input ()img2: string= "";
  


}
