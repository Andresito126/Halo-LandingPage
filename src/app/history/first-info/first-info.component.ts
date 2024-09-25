import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-first-info',
  templateUrl: './first-info.component.html',
  styleUrl: './first-info.component.css'
})
export class FirstInfoComponent {
  @Input() titulo: string="";
  @Input() sinopsis: string="";
}
