import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SelectionParametersComponent} from "./selection-parameters/app.selection-parameters";
import {FormsModule} from "@angular/forms";
import { TrakingComponent } from './traking/traking.component';
import { ReusltsComponent } from './reuslts/reuslts.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectionParametersComponent,
    TrakingComponent,
    ReusltsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


