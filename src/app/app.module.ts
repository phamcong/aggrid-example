import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { BuysellstrRenderer } from './renderers/buysellstr.renderer';

@NgModule({
  declarations: [
    AppComponent,
    BuysellstrRenderer
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    AgGridModule.withComponents([ BuysellstrRenderer ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
