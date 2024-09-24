import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPComponent } from './gallery-p/gallery-p.component';
import { ImgComponentComponent } from './img-component/img-component.component';



@NgModule({
  declarations: [
    GalleryPComponent,
    ImgComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GalleryModule { }
