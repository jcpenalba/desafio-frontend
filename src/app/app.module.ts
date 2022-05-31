import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule  } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
