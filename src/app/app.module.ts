import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SpreadsheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
