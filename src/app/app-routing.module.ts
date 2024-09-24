import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './home/home-p/home-p.component';
import { GalleryPComponent } from './gallery/gallery-p/gallery-p.component';

const routes: Routes = [
  { path: '', component: HomePComponent },
  {path:'gallery',component:GalleryPComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
