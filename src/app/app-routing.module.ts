import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SelectionParametersComponent} from "./selection-parameters/app.selection-parameters";
import {TrakingComponent} from "./traking/traking.component";
import {ReusltsComponent} from "./reuslts/reuslts.component";
import {AboutComponent} from "./about/about.component";
import {DisclaimerComponent} from "./disclaimer/disclaimer.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: SelectionParametersComponent},//Home page, responsible for the selection parameters.
  {path: 'track', component: TrakingComponent},// Tracking page, where the user can type following the displayed text.
  {path: 'results', component: ReusltsComponent},// Results page, where the user can see it's last result and older results displayed on a graph.
  {path: 'about', component: AboutComponent},//About page, page explaining how TypingTrack works and why it was built.
  {path: 'disclaimer', component: DisclaimerComponent}//Disclaimer page, for warnings and security.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
