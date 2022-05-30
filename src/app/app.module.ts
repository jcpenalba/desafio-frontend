import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './Components/card/card.component';
import { SearchComponent } from './Components/search/search.component';
import { DialogAlertComponent } from './Components/dialog-alert/dialog-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    DialogAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
