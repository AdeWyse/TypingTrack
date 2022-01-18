import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SelectionParametersComponent} from "./selection-parameters/app.selection-parameters";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SelectionParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
