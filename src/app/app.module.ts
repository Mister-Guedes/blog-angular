import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { ContentsComponent } from './pages/contents/contents.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    MenuTitleComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
