import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SelectionParametersComponent} from "./selection-parameters/app.selection-parameters";
import {TrakingComponent} from "./traking/traking.component";
import {ReusltsComponent} from "./reuslts/reuslts.component";
import {AboutComponent} from "./about/about.component";
import {DisclaimerComponent} from "./disclaimer/disclaimer.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: SelectionParametersComponent},
  {path: 'track', component: TrakingComponent},
  {path: 'results', component: ReusltsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'disclaimer', component: DisclaimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
