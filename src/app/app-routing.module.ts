import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SelectionParametersComponent} from "./selection-parameters/app.selection-parameters";
import {TrakingComponent} from "./traking/traking.component";
import {ReusltsComponent} from "./reuslts/reuslts.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: SelectionParametersComponent},
  {path: 'track', component: TrakingComponent},
  {path: 'results', component: ReusltsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
