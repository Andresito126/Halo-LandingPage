import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { GalleryModule } from './gallery/gallery.module';
import { HistoryModule } from './history/history.module';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    GalleryModule,
    HistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
