import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './listsAndForms/Company/company-list/company-list.component';
import { CompanyFormComponent } from './listsAndForms/Company/company-form/company-form.component';
import {CommonModule} from "@angular/common";
import {CasinoBuidlingListComponent} from "./listsAndForms/casino-building/casino-buidling-list/casino-buidling-list.component";
import {WorkerListComponent} from "./listsAndForms/worker/worker-list/worker-list.component";
import {WorkerFormComponent} from "./listsAndForms/worker/worker-form/worker-form.component";
import {SlotMachineFormComponent} from "./listsAndForms/slot-machine/slot-machine-form/slot-machine-form.component";
import {SlotMachineListComponent} from "./listsAndForms/slot-machine/slot-machine-list/slot-machine-list.component";
import {CasinoBuildingFormComponent} from "./listsAndForms/casino-building/casino-building-form/casino-building-form.component";

const routes: Routes = [
  { path: 'Company', component: CompanyListComponent },
  { path: 'Company Add', component: CompanyFormComponent },
  { path: 'Casino Building', component: CasinoBuidlingListComponent},
  { path: 'Casino Building Add', component: CasinoBuildingFormComponent},
  { path: 'Worker', component: WorkerListComponent},
  { path: 'Worker Add', component: WorkerFormComponent},
  { path: 'Slot Machine', component: SlotMachineListComponent},
  { path: 'Slot Machine Add', component: SlotMachineFormComponent}
];

@NgModule({
  declarations: [],
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
