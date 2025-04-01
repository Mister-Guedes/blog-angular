import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from '../presentation/components/menu-bar/menu-bar.component';
import { BigCardComponent } from '../presentation/components/big-card/big-card.component';
import { SmallCardComponent } from '../presentation/components/small-card/small-card.component';
import { HomeComponent } from '../presentation/pages/home/home.component';
import { MenuTitleComponent } from '../presentation/components/menu-title/menu-title.component';
import { ContentsComponent } from '../presentation/pages/contents/contents.component';

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
