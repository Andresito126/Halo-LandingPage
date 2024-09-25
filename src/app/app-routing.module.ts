import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './home/home-p/home-p.component';
import { GalleryPComponent } from './gallery/gallery-p/gallery-p.component';
import { HistoryPComponent } from './history/history-p/history-p.component';

const routes: Routes = [
  { path: '', component: HomePComponent },
  {path:'gallery',component:GalleryPComponent},
  {path:'history/:id',component:HistoryPComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
