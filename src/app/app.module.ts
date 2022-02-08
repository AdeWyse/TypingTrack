import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SelectionParametersComponent} from "./selection-parameters/app.selection-parameters";
import {FormsModule} from "@angular/forms";
import { TrakingComponent } from './traking/traking.component';
import { ReusltsComponent } from './reuslts/reuslts.component';
import {NgChartsModule} from "ng2-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


